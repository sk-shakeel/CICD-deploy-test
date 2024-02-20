package com.example.ramp.service;
import com.example.ramp.dto.MerchantRuleDto;
import com.example.ramp.entity.Category;
import com.example.ramp.entity.MerchantRule;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;
import com.example.ramp.repository.CategoryRepository;
import com.example.ramp.repository.MerchantRuleRepository;
import com.example.ramp.types.CategoryType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class MerchantRuleServiceImplTest {

    @Mock
    private MerchantRuleRepository merchantRuleRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private MerchantRuleServiceImpl merchantRuleService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Mock
    private CategoryRepository categoryRepository;

    @Test
    void testGetAllMerchantRules() {
        MerchantRule merchantRule1 = new MerchantRule();
        MerchantRule merchantRule2 = new MerchantRule();

        when(merchantRuleRepository.findAll()).thenReturn(Arrays.asList(merchantRule1, merchantRule2));

        MerchantRuleDto dto1 = new MerchantRuleDto();
        MerchantRuleDto dto2 = new MerchantRuleDto();

        when(modelMapper.map(merchantRule1, MerchantRuleDto.class)).thenReturn(dto1);
        when(modelMapper.map(merchantRule2, MerchantRuleDto.class)).thenReturn(dto2);

        List<MerchantRuleDto> result = merchantRuleService.getAllMerchantRules();

        assertEquals(2, result.size());
        assertEquals(dto1, result.get(0));
        assertEquals(dto2, result.get(1));
    }

    @Test
    void testAddMerchantRuleConflict() {
        String merchantName = "Merchant1";
        int quickBooksCategoryId = 1;

        when(merchantRuleRepository.existsByMerchantNameAndQuickBooksCategoryId(merchantName, quickBooksCategoryId))
                .thenReturn(true);

        try {
            merchantRuleService.addMerchantRule(merchantName, quickBooksCategoryId);
        } catch (Exception e) {
            assertEquals("Merchant Rule is already defined", e.getMessage());
        }
    }

    @Test
     void testAddMerchantRule_Success() throws ConflictException, NotFoundException {
        String merchantName = "Some Merchant";
        int quickBooksCategoryId = 1;
        MerchantRule merchantRule = new MerchantRule();
        merchantRule.setMerchantName(merchantName);
        merchantRule.setQuickBooksCategoryId(quickBooksCategoryId);

        Category quickBooksCategory = new Category();

        when(merchantRuleRepository.existsByMerchantNameAndQuickBooksCategoryId(merchantName, quickBooksCategoryId)).thenReturn(false);

        quickBooksCategory.setId(quickBooksCategoryId);
        quickBooksCategory.setType(CategoryType.QUICKBOOKS);
        quickBooksCategory.setName("Hotel");
        when(categoryRepository.findById(quickBooksCategoryId)).thenReturn(Optional.of(quickBooksCategory));

        String result = merchantRuleService.addMerchantRule(merchantName, quickBooksCategoryId);

        assertEquals("Merchant Rule added", result);
    }

    @Test
     void testAddMerchantRule_Conflict() {
        String merchantName = "Some Merchant";
        int quickBooksCategoryId = 1;

        when(merchantRuleRepository.existsByMerchantNameAndQuickBooksCategoryId(merchantName, quickBooksCategoryId)).thenReturn(true);

        assertThrows(ConflictException.class, () -> merchantRuleService.addMerchantRule(merchantName, quickBooksCategoryId));
    }

    @Test
     void testAddMerchantRule_QuickBooksCategoryNotFound() {
        String merchantName = "Some Merchant";
        int quickBooksCategoryId = 1;

        when(merchantRuleRepository.existsByMerchantNameAndQuickBooksCategoryId(merchantName, quickBooksCategoryId)).thenReturn(false);
        when(categoryRepository.findById(quickBooksCategoryId)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> merchantRuleService.addMerchantRule(merchantName, quickBooksCategoryId));
    }
}

