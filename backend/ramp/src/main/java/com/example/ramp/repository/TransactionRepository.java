package com.example.ramp.repository;

import com.example.ramp.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long> {

    @Modifying
    @Transactional
    @Query("UPDATE Transaction t SET t.categoryId = :categoryId WHERE t.id = :id")
    int updateCategoryIdById( @Param("id") int id,@Param("categoryId") Integer categoryId);

}
