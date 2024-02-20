package com.example.ramp.service;

import com.example.ramp.dto.CategoryRuleDto;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;

import java.util.List;

public interface CategoryRuleService {
    List<CategoryRuleDto> getCategoryRules();

    String addCategoryRule(int rampCategoryId,int quickbooksCategoryId) throws ConflictException, NotFoundException;
}
