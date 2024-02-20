package com.example.ramp.service;

import com.example.ramp.dto.TransactionDto;
import com.example.ramp.exception.CustomException;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> getAllTransactions();
    String updateTransactionRule(int id,Integer quickBooksCategoryId) throws CustomException;
}
