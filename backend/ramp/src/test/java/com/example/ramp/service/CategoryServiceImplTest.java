package com.example.ramp.service;

import com.example.ramp.dto.CategoryDto;
import com.example.ramp.entity.Category;
import com.example.ramp.repository.CategoryRepository;
import com.example.ramp.types.CategoryType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CategoryServiceImplTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryServiceImpl categoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllCategory() {
        Category category1 = new Category(1,CategoryType.RAMP,"Category 1");
        Category category2 = new Category(2,CategoryType.QUICKBOOKS, "Category 2");

        List<Category> categories = Arrays.asList(category1, category2);

        when(categoryRepository.findAll()).thenReturn(categories);

        List<CategoryDto> result = categoryService.getAllCategory();

        assertEquals(2, result.size());

        CategoryDto categoryDto1 = new CategoryDto(1, CategoryType.RAMP, new ArrayList<>());
        CategoryDto categoryDto2 = new CategoryDto(2, CategoryType.QUICKBOOKS, new ArrayList<>());


        verify(categoryRepository, times(1)).findAll();
    }
}
