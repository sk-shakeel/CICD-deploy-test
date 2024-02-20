package com.example.ramp.controller;


import com.example.ramp.dto.CategoryRuleDto;
import com.example.ramp.dto.CategoryRuleRequestDto;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.CustomException;
import com.example.ramp.service.CategoryRuleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CategoryRulesControllerTest {

    @Mock
    private CategoryRuleService categoryRuleService;

    @InjectMocks
    private CategoryRulesController categoryRulesController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllCategoryRules() throws CustomException {

        List<CategoryRuleDto> categoryRules = new ArrayList<>();
        when(categoryRuleService.getCategoryRules()).thenReturn(categoryRules);

        ResponseEntity<List<CategoryRuleDto>> response = categoryRulesController.getAllCategoryRules();

        verify(categoryRuleService, times(1)).getCategoryRules();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(categoryRules, response.getBody());
    }


    @Test
    void testAddCategoryRule() throws Exception {
        CategoryRuleRequestDto requestDto = new CategoryRuleRequestDto();
        requestDto.setRampCategoryId(1);
        requestDto.setQuickBooksCategoryId(2);
        when(categoryRuleService.addCategoryRule(1, 2)).thenReturn("Category Rule Added");

        ResponseEntity<String> response = categoryRulesController.addCategoryRule(requestDto);

        verify(categoryRuleService, times(1)).addCategoryRule(1, 2);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Category Rule Added", response.getBody());
    }

    @Test
    void testAddCategoryRuleConflict() throws Exception {
        CategoryRuleRequestDto requestDto = new CategoryRuleRequestDto();
        requestDto.setRampCategoryId(1);
        requestDto.setQuickBooksCategoryId(2);
        when(categoryRuleService.addCategoryRule(1, 2)).thenThrow(new ConflictException("Conflict Message"));

        try {
            categoryRulesController.addCategoryRule(requestDto);
        } catch (ConflictException e) {
            assertEquals("Conflict Message", e.getMessage());
        }
    }
}
