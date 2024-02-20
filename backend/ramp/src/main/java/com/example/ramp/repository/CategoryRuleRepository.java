package com.example.ramp.repository;

import com.example.ramp.entity.CategoryRule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRuleRepository extends JpaRepository<CategoryRule,Long> {

    @Query("SELECT COUNT(cr) > 0 FROM CategoryRule cr WHERE cr.rampCategoryId = :rampCategoryId AND cr.quickBooksCategoryId = :quickBooksCategoryId")
    boolean existsByRampCategoryIdAndQuickBooksCategoryId(@Param("rampCategoryId") int rampCategoryId, @Param("quickBooksCategoryId") int quickBooksCategoryId);

}
