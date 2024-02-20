package com.example.ramp.service;

import com.example.ramp.dto.PaymentDto;
import com.example.ramp.dto.PaymentRequestDto;
import com.example.ramp.entity.Payment;
import com.example.ramp.repository.PaymentRepository;
import com.example.ramp.types.PaymentStatus;
import com.example.ramp.types.Status;
import com.example.ramp.types.Vendor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class PaymentServiceImplTest {

    @Mock
    private PaymentRepository paymentRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private PaymentServiceImpl paymentService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllPayments() {
        Payment payment1 = new Payment();
        payment1.setId(1);
        payment1.setVendorName("Vendor1");
        payment1.setAmount(BigDecimal.valueOf(100.0));
        payment1.setStatus(Status.SCHEDULED);
        payment1.setPaymentType("Credit");
        payment1.setPaymentDate(new Date());
        payment1.setInvoiceDate(new Date());
        payment1.setDueDate(new Date());

        Payment payment2 = new Payment();
        payment2.setId(2);
        payment2.setVendorName("Vendor2");
        payment2.setAmount(BigDecimal.valueOf(200.0));
        payment2.setStatus(Status.SCHEDULED);
        payment2.setPaymentType("Debit");
        payment2.setPaymentDate(new Date());
        payment2.setInvoiceDate(new Date());
        payment2.setDueDate(new Date());

        List<Payment> payments = new ArrayList<>();
        payments.add(payment1);
        payments.add(payment2);

        when(paymentRepository.findAll()).thenReturn(payments);

        List<PaymentDto> result = paymentService.getAllPayments();

        assertEquals(2, result.size());

        PaymentDto dto1 = result.get(0);
        assertEquals(payment1.getId(), dto1.getId());
        assertEquals(payment1.getVendorName(), dto1.getVendor().getName());
        assertEquals(payment1.getAmount(), dto1.getVendor().getAmount());
        assertEquals(payment1.getStatus(), dto1.getPaymentStatus().getStatus());
        assertEquals(payment1.getPaymentType(), dto1.getPaymentStatus().getPayment());
        assertEquals(payment1.getPaymentDate(), dto1.getPaymentDate());
        assertEquals(payment1.getInvoiceDate(), dto1.getInvoiceDate());
        assertEquals(payment1.getDueDate(), dto1.getDueDate());

        PaymentDto dto2 = result.get(1);
        assertEquals(payment2.getId(), dto2.getId());
        assertEquals(payment2.getVendorName(), dto2.getVendor().getName());
        assertEquals(payment2.getAmount(), dto2.getVendor().getAmount());
        assertEquals(payment2.getStatus(), dto2.getPaymentStatus().getStatus());
        assertEquals(payment2.getPaymentType(), dto2.getPaymentStatus().getPayment());
        assertEquals(payment2.getPaymentDate(), dto2.getPaymentDate());
        assertEquals(payment2.getInvoiceDate(), dto2.getInvoiceDate());
        assertEquals(payment2.getDueDate(), dto2.getDueDate());
    }

    @Test
    void testAddNewPayment() throws Exception {
        PaymentRequestDto requestDto = new PaymentRequestDto();
        Vendor vendor = new Vendor("Vendor1", BigDecimal.valueOf(100.0));
        PaymentStatus paymentStatus = new PaymentStatus(Status.SCHEDULED, "Credit");
        requestDto.setVendor(vendor);
        requestDto.setPaymentStatus(paymentStatus);

        Payment payment = new Payment();

        when(modelMapper.map(requestDto, Payment.class)).thenReturn(payment);

        String response = paymentService.addNewPayment(requestDto);

        verify(paymentRepository, times(1)).save(payment);
        assertEquals("Payment Added Successfully", response);
    }

    @Test
    void testAddNewPaymentException() {
        PaymentRequestDto requestDto = new PaymentRequestDto();
        Vendor vendor = new Vendor("Vendor1", BigDecimal.valueOf(100.0));
        PaymentStatus paymentStatus = new PaymentStatus(Status.SCHEDULED, "Credit");
        requestDto.setVendor(vendor);
        requestDto.setPaymentStatus(paymentStatus);

        Payment payment = new Payment();

        when(modelMapper.map(requestDto, Payment.class)).thenReturn(payment);
        doThrow(new RuntimeException("Error saving payment")).when(paymentRepository).save(payment);

        try {
            paymentService.addNewPayment(requestDto);
        } catch (Exception e) {
            assertEquals("Error saving payment", e.getMessage());
        }
    }
}

