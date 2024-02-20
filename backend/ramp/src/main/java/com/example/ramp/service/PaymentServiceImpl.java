package com.example.ramp.service;

import com.example.ramp.dto.PaymentDto;
import com.example.ramp.dto.PaymentRequestDto;
import com.example.ramp.entity.Payment;
import com.example.ramp.exception.CustomException;
import com.example.ramp.repository.PaymentRepository;
import com.example.ramp.types.PaymentStatus;
import com.example.ramp.types.Vendor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService{

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PaymentDto> getAllPayments() {

        List<Payment> payments=paymentRepository.findAll();

        List<PaymentDto> paymentResponse=new ArrayList<>();

        for (Payment payment:payments){
            Vendor vendor=new Vendor(payment.getVendorName(),payment.getAmount());
            PaymentStatus paymentStatus=new PaymentStatus(payment.getStatus(),payment.getPaymentType());
            int id=payment.getId();
            Date paymentDate= payment.getPaymentDate();
             Date invoiceDate=payment.getInvoiceDate();
             Date dueDate=payment.getDueDate();
             PaymentDto paymentDto=new PaymentDto(id,vendor,paymentStatus,paymentDate,invoiceDate,dueDate);

             paymentResponse.add(paymentDto);
        }

        return paymentResponse;
    }

    @Override
    public String addNewPayment(PaymentRequestDto paymentRequestDto) throws CustomException {
        try {
            Payment payment=modelMapper.map(paymentRequestDto,Payment.class);
            Vendor vendor=paymentRequestDto.getVendor();
            payment.setVendorName(vendor.getName());
            payment.setAmount(vendor.getAmount());
            PaymentStatus paymentStatus=paymentRequestDto.getPaymentStatus();

            payment.setPaymentType(paymentStatus.getPayment());
            payment.setStatus(paymentStatus.getStatus());
            paymentRepository.save(payment);
            return "Payment Added Successfully";
        }
        catch (Exception e){
            throw new CustomException(e.getMessage());
        }
    }
}
