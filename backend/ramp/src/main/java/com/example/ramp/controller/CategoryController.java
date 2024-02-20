package com.example.ramp.controller;

import com.example.ramp.dto.CategoryDto;
import com.example.ramp.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/ramp/")
@RequiredArgsConstructor
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("categories")
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
            List<CategoryDto> categoryDtos= categoryService.getAllCategory();
            return new ResponseEntity<>(categoryDtos, HttpStatus.OK);
        }
}
