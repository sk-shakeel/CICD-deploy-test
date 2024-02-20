package com.example.ramp.service;

import com.example.ramp.dto.CategoryRuleDto;
import com.example.ramp.entity.Category;
import com.example.ramp.entity.CategoryRule;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;
import com.example.ramp.repository.CategoryRepository;
import com.example.ramp.repository.CategoryRuleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryRuleServiceImpl implements CategoryRuleService{

    @Autowired
    private CategoryRuleRepository categoryRuleRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<CategoryRuleDto> getCategoryRules() {
        List<CategoryRule> categoryRules = categoryRuleRepository.findAll();
        return categoryRules.stream()
                .map(categoryRule -> modelMapper.map(categoryRule, CategoryRuleDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public String addCategoryRule(int rampCategoryId, int quickbooksCategoryId) throws ConflictException, NotFoundException {
        if(categoryRuleRepository.existsByRampCategoryIdAndQuickBooksCategoryId(rampCategoryId,quickbooksCategoryId)){
            throw new ConflictException("Category Rule is already defined");
        }

        Optional<Category> rampCategoryOptional = categoryRepository.findById(rampCategoryId);
        Optional<Category> quickbooksCategoryOptional = categoryRepository.findById(quickbooksCategoryId);

        if (!rampCategoryOptional.isPresent() || !quickbooksCategoryOptional.isPresent()) {
            throw new NotFoundException("No Category exist for this Id : " + rampCategoryId + ", " + quickbooksCategoryId);
        }
        CategoryRule categoryRule=new CategoryRule();
        categoryRule.setRampCategoryId(rampCategoryId);
        categoryRule.setQuickBooksCategoryId(quickbooksCategoryId);
        categoryRuleRepository.save(categoryRule);

        return "Category Rule Added";
    }

}
