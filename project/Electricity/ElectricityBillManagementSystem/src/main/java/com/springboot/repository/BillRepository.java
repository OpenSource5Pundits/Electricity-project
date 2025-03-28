package com.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springboot.model.Bill;
@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
	
	@Query("SELECT b FROM Bill b WHERE b.paid = 'NO'")
	List<Bill> findByPaid();

}
