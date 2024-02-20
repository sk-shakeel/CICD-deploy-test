package com.example.ramp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "merchant_rules")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MerchantRule{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "merchant_name")
    private String merchantName;

    @Column(name = "ramp_category_id")
    private int quickBooksCategoryId;

}
