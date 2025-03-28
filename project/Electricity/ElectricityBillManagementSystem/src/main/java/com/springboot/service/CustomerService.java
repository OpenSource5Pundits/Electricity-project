package com.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.exception.CustomerNotFoundException;
import com.springboot.model.Customer;

@Service
public interface CustomerService {
	
	public Customer find(Long id);
	public List<Customer> findAll();
	public void save(Customer customer);
	public void delete(Long id) throws CustomerNotFoundException;
	public void update(Customer customer) throws CustomerNotFoundException;

}
