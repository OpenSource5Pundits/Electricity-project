package com.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.User;
import com.springboot.repository.UserDAO;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDAO dao;
	
	@Override
	public List<User> findAll() {
		return dao.findAll();
	}

}
