package com.example.ramp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "category_rules")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ramp_category_id")
    private int rampCategoryId;

    @Column(name = "quickbooks_category_id")
    private int quickBooksCategoryId;


}
