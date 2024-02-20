package com.example.ramp.controller;

import com.example.ramp.dto.PaymentDto;
import com.example.ramp.dto.PaymentRequestDto;
import com.example.ramp.exception.CustomException;
import com.example.ramp.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ramp/payments")
@RequiredArgsConstructor
public class PaymentController {


    @Autowired
    private PaymentService paymentService;

    @GetMapping()
    public ResponseEntity<List<PaymentDto>> getAllPayments() {
            List<PaymentDto> paymentDtoResponse= paymentService.getAllPayments();
            return new ResponseEntity<>(paymentDtoResponse, HttpStatus.OK);

        }

    @PostMapping()
    public ResponseEntity<String> addNewPayment(@RequestBody PaymentRequestDto paymentRequestDto) throws CustomException {
            String paymentResponse=paymentService.addNewPayment(paymentRequestDto);
            return new ResponseEntity<>(paymentResponse,HttpStatus.CREATED);
    }

}
