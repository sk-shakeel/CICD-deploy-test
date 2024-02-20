package com.example.ramp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRuleDto {

    private int id;
    private int rampCategoryId;
    private int quickBooksCategoryId;

}

