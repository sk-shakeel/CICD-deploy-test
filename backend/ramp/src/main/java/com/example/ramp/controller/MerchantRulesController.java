package com.example.ramp.controller;

import com.example.ramp.dto.MerchantRuleDto;
import com.example.ramp.dto.MerchantRuleRequestDto;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;
import com.example.ramp.service.MerchantRuleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ramp/merchantRules")
@RequiredArgsConstructor
public class MerchantRulesController {

    @Autowired
    private MerchantRuleService merchantRuleService;

    @GetMapping()
    public ResponseEntity<List<MerchantRuleDto>> getAllMerchantRules() {
            List<MerchantRuleDto> merchantRulesResponse= merchantRuleService.getAllMerchantRules();
            return new ResponseEntity<>(merchantRulesResponse, HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<String> addMerchantRule(@RequestBody MerchantRuleRequestDto merchantRuleRequestDto) throws ConflictException, NotFoundException {
            String merchantRulesResponse= merchantRuleService.addMerchantRule(merchantRuleRequestDto.getMerchantName(),merchantRuleRequestDto.getQuickBooksCategoryId());
            return new ResponseEntity<>(merchantRulesResponse, HttpStatus.OK);
        }
}
