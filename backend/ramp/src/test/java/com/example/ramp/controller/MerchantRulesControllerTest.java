package com.example.ramp.controller;

import com.example.ramp.dto.MerchantRuleDto;
import com.example.ramp.dto.MerchantRuleRequestDto;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;
import com.example.ramp.service.MerchantRuleService;
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

class MerchantRulesControllerTest {

    @Mock
    private MerchantRuleService merchantRuleService;

    @InjectMocks
    private MerchantRulesController merchantRulesController;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllMerchantRules() {
        List<MerchantRuleDto> merchantRules = new ArrayList<>();
        when(merchantRuleService.getAllMerchantRules()).thenReturn(merchantRules);

        ResponseEntity<List<MerchantRuleDto>> response = merchantRulesController.getAllMerchantRules();

        verify(merchantRuleService, times(1)).getAllMerchantRules();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(merchantRules, response.getBody());
    }


    @Test
    void testAddMerchantRule() throws ConflictException, NotFoundException {
        MerchantRuleRequestDto requestDto = new MerchantRuleRequestDto();
        requestDto.setMerchantName("MerchantA");
        requestDto.setQuickBooksCategoryId(1);
        when(merchantRuleService.addMerchantRule("MerchantA", 1)).thenReturn("Merchant Rule Added");

        ResponseEntity<String> response = merchantRulesController.addMerchantRule(requestDto);

        verify(merchantRuleService, times(1)).addMerchantRule("MerchantA", 1);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Merchant Rule Added", response.getBody());
    }


}

