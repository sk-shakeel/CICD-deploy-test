package com.example.ramp.controller;

import com.example.ramp.dto.PaymentDto;
import com.example.ramp.dto.PaymentRequestDto;
import com.example.ramp.exception.CustomException;
import com.example.ramp.service.PaymentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class PaymentControllerTest {

    @Mock
    private PaymentService paymentService;

    @InjectMocks
    private PaymentController paymentController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllPayments() throws CustomException {
        List<PaymentDto> paymentDtos = new ArrayList<>();
        when(paymentService.getAllPayments()).thenReturn(paymentDtos);

        ResponseEntity<List<PaymentDto>> response = paymentController.getAllPayments();

        verify(paymentService, times(1)).getAllPayments();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(paymentDtos, response.getBody());
    }


    @Test
    void testAddNewPayment() throws Exception {
        PaymentRequestDto requestDto = new PaymentRequestDto();
        when(paymentService.addNewPayment(requestDto)).thenReturn("Payment Added");

        ResponseEntity<String> response = paymentController.addNewPayment(requestDto);

        verify(paymentService, times(1)).addNewPayment(requestDto);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals("Payment Added", response.getBody());
    }

    @Test
    void testAddNewPaymentException() throws Exception {
        PaymentRequestDto requestDto = new PaymentRequestDto();
        when(paymentService.addNewPayment(requestDto)).thenThrow(new CustomException("Payment Error"));

        try {
            paymentController.addNewPayment(requestDto);
        } catch (CustomException e) {
            assertEquals("Payment Error", e.getMessage());
        }
    }
}

