package com.example.ramp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class MerchantRuleDto {

    private int id;

    private String merchantName;

    private int quickBooksCategoryId;
}
