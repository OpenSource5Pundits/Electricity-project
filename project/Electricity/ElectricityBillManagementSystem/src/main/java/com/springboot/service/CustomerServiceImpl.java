package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.exception.CustomerNotFoundException;
import com.springboot.model.Customer;
import com.springboot.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository repository;
	
	@Override
	public List<Customer> findAll() {
		return repository.findAll();
	}

	@Override
	public Customer find(Long id) {
		Optional<Customer> o=repository.findById(id);
		if(o.isPresent()) {
			return o.get();
		}
		return null;
	}

	@Override
	public void save(Customer customer) {
		repository.save(customer);
		
	}

	@Override
	public void delete(Long id) throws CustomerNotFoundException {
		Optional<Customer> o=repository.findById(id);
		
		if(o.isPresent()) {
			repository.deleteById(id);
		} else {
			throw new CustomerNotFoundException("custId: " + id);
		}
		
	}

	@Override
	public void update(Customer customer) throws CustomerNotFoundException {
		System.out.println("In service, from browser: "+customer);
		Optional<Customer> o=repository.findById(customer.getCustId());
		System.out.println("In service, from db: "+o.get());
		
		if(o.isPresent()) {
			repository.save(customer);
		} else {
			throw new CustomerNotFoundException("custId: " +customer.getCustId());
		}
		
		
	}
	
	

}
