package com.example.ramp.service;

import com.example.ramp.dto.MerchantRuleDto;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;

import java.util.List;

public interface MerchantRuleService {
    List<MerchantRuleDto> getAllMerchantRules();

    String addMerchantRule(String merchantName,int quickBooksCategoryId) throws ConflictException, NotFoundException;
}
