package com.example.ramp.service;

import com.example.ramp.dto.CategoryDto;
import com.example.ramp.dto.CategoryTypeDto;
import com.example.ramp.entity.Category;
import com.example.ramp.repository.CategoryRepository;
import com.example.ramp.types.CategoryType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<CategoryDto> getAllCategory() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDto> categoryDtos = new ArrayList<>();

        List<CategoryTypeDto> rampTypes = new ArrayList<>();
        List<CategoryTypeDto> quickbookTypes = new ArrayList<>();
        for (Category category : categories) {
            CategoryTypeDto categoryTypeDto = new CategoryTypeDto(category.getId(), category.getName());
            if (category.getType() == CategoryType.RAMP) {
                rampTypes.add(categoryTypeDto);
            }
            else {
                quickbookTypes.add(categoryTypeDto);
            }
        }

        CategoryDto categoryDto1 = new CategoryDto(1,CategoryType.RAMP,rampTypes);
        categoryDtos.add(categoryDto1);

        CategoryDto categoryDto2 = new CategoryDto(2,CategoryType.QUICKBOOKS,quickbookTypes);
        categoryDtos.add(categoryDto2);

        return categoryDtos;
    }

}
