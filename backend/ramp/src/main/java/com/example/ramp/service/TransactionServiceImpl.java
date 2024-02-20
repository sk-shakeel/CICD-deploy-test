package com.example.ramp.service;

import com.example.ramp.dto.TransactionDto;
import com.example.ramp.entity.Transaction;
import com.example.ramp.exception.CustomException;
import com.example.ramp.repository.TransactionRepository;
import com.example.ramp.types.Meta;
import com.example.ramp.types.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public List<TransactionDto> getAllTransactions() {
        List<Transaction> transactions=transactionRepository.findAll();
        List<TransactionDto> transactionResponse = new ArrayList<>();

        for (Transaction transaction : transactions) {
            TransactionDto transactionDto = new TransactionDto();
            transactionDto.setId(transaction.getId());

            Meta meta = new Meta();
            meta.setBrand(transaction.getMerchantName());
            meta.setName(transaction.getBrandName());
            transactionDto.setMeta(meta);

            transactionDto.setAmount(transaction.getAmount());
            transactionDto.setDate(transaction.getDate());

            User user=new User(transaction.getUserName(),transaction.getVirtualId());
            transactionDto.setUser(user);
            transactionDto.setReceiptId(transaction.getReceiptId());
            transactionDto.setMemo(transaction.getMemo());
            transactionDto.setCategoryId(transaction.getCategoryId());

            transactionResponse.add(transactionDto);
        }

        return transactionResponse;
    }

    @Override
    public String updateTransactionRule(int id, Integer quickBooksCategoryId) throws CustomException {
        try {
            transactionRepository.updateCategoryIdById(id,quickBooksCategoryId);
            return "updated rule to all the transactions";
        }
        catch (Exception e){
            throw new CustomException( "failed to update rule");
        }
    }
}
