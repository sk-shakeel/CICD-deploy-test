package com.example.ramp.controller;

import com.example.ramp.dto.TransactionDto;
import com.example.ramp.exception.CustomException;
import com.example.ramp.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ramp/transactions")
@RequiredArgsConstructor
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping()
    public ResponseEntity<List<TransactionDto>> getAllTransactions() {
            List<TransactionDto> transactionResponse=transactionService.getAllTransactions();
            return new ResponseEntity<>(transactionResponse, HttpStatus.OK);

    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> updateTransaction(@PathVariable int id,@RequestBody Integer quickBooksCategoryID) throws CustomException {
            return new ResponseEntity<>(transactionService.updateTransactionRule(id,quickBooksCategoryID),HttpStatus.OK);

    }
}
