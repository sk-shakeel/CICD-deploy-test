package com.example.ramp.controller;

import com.example.ramp.dto.TransactionDto;
import com.example.ramp.exception.CustomException;
import com.example.ramp.service.TransactionService;
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

class TransactionControllerTest {

    @Mock
    private TransactionService transactionService;

    @InjectMocks
    private TransactionController transactionController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllTransactions() throws CustomException {
        List<TransactionDto> transactionDtos = new ArrayList<>();
        when(transactionService.getAllTransactions()).thenReturn(transactionDtos);

        ResponseEntity<List<TransactionDto>> response = transactionController.getAllTransactions();

        verify(transactionService, times(1)).getAllTransactions();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(transactionDtos, response.getBody());
    }


    @Test
    void testUpdateTransaction() throws CustomException {
        int id = 1;
        Integer quickBooksCategoryID = 2;
        when(transactionService.updateTransactionRule(id, quickBooksCategoryID)).thenReturn("Transaction Updated");

        ResponseEntity<String> response = transactionController.updateTransaction(id, quickBooksCategoryID);

        verify(transactionService, times(1)).updateTransactionRule(id, quickBooksCategoryID);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Transaction Updated", response.getBody());
    }


}

