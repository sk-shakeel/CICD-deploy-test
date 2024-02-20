package com.example.ramp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "transactions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "merchant_name")
    private String merchantName;

    @Column(name = "brand_name")
    private String brandName;

    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "date")
    private Date date;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "virtual_id")
    private String virtualId;

    @Column(name = "reciept_id")
    private String receiptId;

    @Column(name = "memo")
    private String memo;

    @Column(name = "category_id")
    private Integer categoryId;
}
