package com.example.ramp.repository;

import com.example.ramp.entity.MerchantRule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface MerchantRuleRepository extends JpaRepository<MerchantRule, Long> {

    @Query("SELECT COUNT(mr) > 0 FROM MerchantRule mr WHERE mr.merchantName = :merchantName AND mr.quickBooksCategoryId = :quickBooksCategoryId")
    boolean existsByMerchantNameAndQuickBooksCategoryId(@Param("merchantName") String merchantName, @Param("quickBooksCategoryId") int quickBooksCategoryId);

    Optional<MerchantRule> findByMerchantName(String merchantName);
    @Modifying
    @Transactional
    @Query("UPDATE MerchantRule mr SET mr.quickBooksCategoryId = :quickBooksCategoryId WHERE mr.merchantName = :merchantName")
    void updateMerchantRule(@Param("merchantName") String merchantName, @Param("quickBooksCategoryId") int quickBooksCategoryId);

}

