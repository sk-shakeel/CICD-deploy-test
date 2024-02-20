package com.example.ramp.service;

import com.example.ramp.dto.TransactionDto;
import com.example.ramp.entity.Transaction;
import com.example.ramp.exception.CustomException;
import com.example.ramp.repository.TransactionRepository;
import com.example.ramp.types.Meta;
import com.example.ramp.types.User;
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

class TransactionServiceImplTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private TransactionServiceImpl transactionService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllTransactions() {
        // Arrange
        Transaction transaction1 = new Transaction();
        transaction1.setId(1);
        transaction1.setMerchantName("Merchant1");
        transaction1.setBrandName("Brand1");
        transaction1.setAmount(BigDecimal.valueOf(100.0));
        transaction1.setDate(new Date());
        transaction1.setUserName("User1");
        transaction1.setVirtualId("Virtual1");
        transaction1.setReceiptId("Receipt1");
        transaction1.setMemo("Memo1");
        transaction1.setCategoryId(1);

        Transaction transaction2 = new Transaction();
        transaction2.setId(2);
        transaction2.setMerchantName("Merchant2");
        transaction2.setBrandName("Brand2");
        transaction2.setAmount(BigDecimal.valueOf(200.0));
        transaction2.setDate(new Date());
        transaction2.setUserName("User2");
        transaction2.setVirtualId("Virtual2");
        transaction2.setReceiptId("Receipt2");
        transaction2.setMemo("Memo2");
        transaction2.setCategoryId(2);

        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction1);
        transactions.add(transaction2);

        when(transactionRepository.findAll()).thenReturn(transactions);

        List<TransactionDto> result = transactionService.getAllTransactions();

        assertEquals(2, result.size());

        TransactionDto dto1 = result.get(0);
        assertTransactionDtoEquals(transaction1, dto1);

        TransactionDto dto2 = result.get(1);
        assertTransactionDtoEquals(transaction2, dto2);
    }

    @Test
    void testUpdateTransactionRule() throws CustomException {
        int transactionId = 1;
        Integer quickBooksCategoryId = 42;

        String result = transactionService.updateTransactionRule(transactionId, quickBooksCategoryId);

        verify(transactionRepository, times(1)).updateCategoryIdById(transactionId, quickBooksCategoryId);
        assertEquals("updated rule to all the transactions", result);
    }

    private void assertTransactionDtoEquals(Transaction transaction, TransactionDto dto) {
        assertEquals(transaction.getId(), dto.getId());

        Meta meta = dto.getMeta();
        assertEquals(transaction.getMerchantName(), meta.getBrand());
        assertEquals(transaction.getBrandName(), meta.getName());

        assertEquals(transaction.getAmount(), dto.getAmount());
        assertEquals(transaction.getDate(), dto.getDate());

        User user = dto.getUser();
        assertEquals(transaction.getUserName(), user.getName());
        assertEquals(transaction.getVirtualId(), user.getVirtualId());

        assertEquals(transaction.getReceiptId(), dto.getReceiptId());
        assertEquals(transaction.getMemo(), dto.getMemo());
        assertEquals(transaction.getCategoryId(), dto.getCategoryId());
    }


}
