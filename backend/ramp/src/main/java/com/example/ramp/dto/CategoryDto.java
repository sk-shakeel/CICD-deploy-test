package com.example.ramp.dto;

import com.example.ramp.types.CategoryType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto {

    private int id;
    private CategoryType name;
    private List<CategoryTypeDto> types;
}
