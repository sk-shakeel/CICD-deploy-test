package com.example.ramp.dto;


import com.example.ramp.types.Meta;
import com.example.ramp.types.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionDto {

    private int id;
    private Meta meta;
    private BigDecimal amount;
    private Date date;
    private User user;
    private String receiptId;
    private String memo;
    private Integer categoryId;
}
