package com.example.ramp.controller;

import com.example.ramp.dto.CategoryDto;
import com.example.ramp.exception.CustomException;
import com.example.ramp.service.CategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

class CategoryControllerTest {

    @Mock
    private CategoryService categoryService;

    @InjectMocks
    private CategoryController categoryController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllCategories() throws CustomException {

        List<CategoryDto> categoryDtos = new ArrayList<>();
        when(categoryService.getAllCategory()).thenReturn(categoryDtos);

        ResponseEntity<List<CategoryDto>> response = categoryController.getAllCategories();

        verify(categoryService, times(1)).getAllCategory();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(categoryDtos, response.getBody());
    }


}

