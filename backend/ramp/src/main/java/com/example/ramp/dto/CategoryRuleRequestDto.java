package com.example.ramp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRuleRequestDto {

    private int rampCategoryId;
    private int quickBooksCategoryId;

}
