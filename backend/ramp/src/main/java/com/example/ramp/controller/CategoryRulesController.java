package com.example.ramp.controller;

import com.example.ramp.dto.CategoryRuleDto;
import com.example.ramp.dto.CategoryRuleRequestDto;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;
import com.example.ramp.service.CategoryRuleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ramp/categoryRules")
@RequiredArgsConstructor
public class CategoryRulesController {

    @Autowired
    private CategoryRuleService categoryRuleService;

    @GetMapping()
    public ResponseEntity<List<CategoryRuleDto>> getAllCategoryRules() {
            List<CategoryRuleDto> categoryRulesResponse= categoryRuleService.getCategoryRules();
            return new ResponseEntity<>(categoryRulesResponse, HttpStatus.OK);

    }

    @PostMapping()
    public ResponseEntity<String> addCategoryRule(@RequestBody CategoryRuleRequestDto categoryRuleRequestDto) throws ConflictException, NotFoundException {
            String categoryRulesResponse= categoryRuleService.addCategoryRule(categoryRuleRequestDto.getRampCategoryId(),categoryRuleRequestDto.getQuickBooksCategoryId());
            return new ResponseEntity<>(categoryRulesResponse, HttpStatus.OK);
    }
}
