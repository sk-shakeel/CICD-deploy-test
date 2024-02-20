package com.example.ramp.service;

import com.example.ramp.dto.CategoryRuleDto;
import com.example.ramp.entity.Category;
import com.example.ramp.entity.CategoryRule;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;
import com.example.ramp.repository.CategoryRepository;
import com.example.ramp.repository.CategoryRuleRepository;
import com.example.ramp.types.CategoryType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class CategoryRuleServiceImplTest {

    @InjectMocks
    private CategoryRuleServiceImpl categoryRuleService;

    @Mock
    private CategoryRuleRepository categoryRuleRepository;

    @Mock
    private ModelMapper modelMapper;

    @Mock
    private CategoryRepository categoryRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetCategoryRules() {
        List<CategoryRule> categoryRules = new ArrayList<>();
        CategoryRule categoryRule=new CategoryRule();
        categoryRule.setQuickBooksCategoryId(2);
        categoryRule.setRampCategoryId(1);
        categoryRules.add(categoryRule);
        CategoryRule categoryRule1=new CategoryRule();
        categoryRule1.setQuickBooksCategoryId(4);
        categoryRule1.setRampCategoryId(3);

        categoryRules.add(categoryRule1);
        List<CategoryRuleDto> expectedDtoList = new ArrayList<>();

        CategoryRuleDto categoryRuleDto=new CategoryRuleDto();
        categoryRuleDto.setQuickBooksCategoryId(2);
        categoryRuleDto.setRampCategoryId(1);

        CategoryRuleDto categoryRuleDto1=new CategoryRuleDto();
        categoryRuleDto1.setQuickBooksCategoryId(4);
        categoryRuleDto1.setRampCategoryId(3);

        expectedDtoList.add(categoryRuleDto);
        expectedDtoList.add(categoryRuleDto1);

        when(categoryRuleRepository.findAll()).thenReturn(categoryRules);
        when(modelMapper.map(any(), eq(CategoryRuleDto.class))).thenReturn(categoryRuleDto, categoryRuleDto1);

        List<CategoryRuleDto> result = categoryRuleService.getCategoryRules();

        assertEquals(expectedDtoList, result);
        verify(categoryRuleRepository, times(1)).findAll();
        verify(modelMapper, times(2)).map(any(), eq(CategoryRuleDto.class));
    }



    @Test
    void testAddCategoryRuleWithConflictException() {
        int rampCategoryId = 1;
        int quickbooksCategoryId = 2;

        when(categoryRuleRepository.existsByRampCategoryIdAndQuickBooksCategoryId(rampCategoryId, quickbooksCategoryId)).thenReturn(true);

        assertThrows(ConflictException.class, () -> categoryRuleService.addCategoryRule(rampCategoryId, quickbooksCategoryId));
        verify(categoryRuleRepository, times(1)).existsByRampCategoryIdAndQuickBooksCategoryId(rampCategoryId, quickbooksCategoryId);
        verify(categoryRuleRepository, never()).save(any());
    }

    @Test
    void testAddCategoryRuleWithNotFoundException() {
        int rampCategoryId = 1;
        int quickbooksCategoryId = 2;

        when(categoryRepository.findById(rampCategoryId)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> categoryRuleService.addCategoryRule(rampCategoryId, quickbooksCategoryId));
    }

    @Test
     void testAddCategoryRule() throws ConflictException, NotFoundException {
        int rampCategoryId = 1;
        int quickbooksCategoryId = 2;
        CategoryRule categoryRule = new CategoryRule();
        categoryRule.setRampCategoryId(rampCategoryId);
        categoryRule.setQuickBooksCategoryId(quickbooksCategoryId);

        Category rampCategory = new Category(1, CategoryType.RAMP,"Airlines");
        Category quickbooksCategory = new Category(2,CategoryType.QUICKBOOKS,"Hotel");

        when(categoryRuleRepository.existsByRampCategoryIdAndQuickBooksCategoryId(rampCategoryId, quickbooksCategoryId)).thenReturn(false);
        when(categoryRepository.findById(rampCategoryId)).thenReturn(Optional.of(rampCategory));
        when(categoryRepository.findById(quickbooksCategoryId)).thenReturn(Optional.of(quickbooksCategory));

        String result = categoryRuleService.addCategoryRule(rampCategoryId, quickbooksCategoryId);

        assertEquals("Category Rule Added", result);
    }

}
