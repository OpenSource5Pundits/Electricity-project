package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.User;

@Repository
public interface UserDAO extends JpaRepository<User, Long>{
	

}
