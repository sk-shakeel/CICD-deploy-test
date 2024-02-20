package com.example.ramp.service;


import com.example.ramp.dto.PaymentDto;
import com.example.ramp.dto.PaymentRequestDto;
import com.example.ramp.exception.CustomException;

import java.util.List;

public interface PaymentService {

    List<PaymentDto> getAllPayments();

    String addNewPayment(PaymentRequestDto paymentRequestDto) throws CustomException;
}
