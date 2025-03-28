package com.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.model.User;

@Service
public interface UserService {
	public List<User> findAll();

}
