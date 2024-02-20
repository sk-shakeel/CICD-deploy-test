package com.example.ramp.service;

import com.example.ramp.dto.MerchantRuleDto;
import com.example.ramp.entity.Category;
import com.example.ramp.entity.MerchantRule;
import com.example.ramp.exception.ConflictException;
import com.example.ramp.exception.NotFoundException;
import com.example.ramp.repository.CategoryRepository;
import com.example.ramp.repository.MerchantRuleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MerchantRuleServiceImpl implements MerchantRuleService{

    @Autowired
    private MerchantRuleRepository merchantRuleRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public List<MerchantRuleDto> getAllMerchantRules() {
        List<MerchantRule> merchantRules=merchantRuleRepository.findAll();
        return merchantRules.stream()
                .map(merchantRule -> modelMapper.map(merchantRule,MerchantRuleDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public String addMerchantRule(String merchantName, int quickBooksCategoryId) throws ConflictException, NotFoundException {
        if(merchantRuleRepository.existsByMerchantNameAndQuickBooksCategoryId(merchantName,quickBooksCategoryId)){
            throw new ConflictException("Merchant Rule is already defined");
        }

        Optional<Category> quickbooksCategoryOptional = categoryRepository.findById(quickBooksCategoryId);

        if( !quickbooksCategoryOptional.isPresent()){
            throw new NotFoundException("No Category exist for this Id : "+quickBooksCategoryId);
        }

        Optional<MerchantRule> mRule=merchantRuleRepository.findByMerchantName(merchantName);

        if(mRule.isPresent()){
            merchantRuleRepository.updateMerchantRule(merchantName,quickBooksCategoryId);
            return "Merchant Rule Updated";
        }
        MerchantRule merchantRule=new MerchantRule();
        merchantRule.setMerchantName(merchantName);
        merchantRule.setQuickBooksCategoryId(quickBooksCategoryId);
        merchantRuleRepository.save(merchantRule);

        return "Merchant Rule added";
    }
}
