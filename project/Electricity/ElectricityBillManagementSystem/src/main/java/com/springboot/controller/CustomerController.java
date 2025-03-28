package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Customer;
import com.springboot.service.CustomerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  

@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	@PostMapping("/insert")
	public HttpStatus addCustomer(@RequestBody Customer customer) {
		try {
			service.save(customer);
			return HttpStatus.CREATED;
		} catch (Exception e) {
			return HttpStatus.FOUND;
		}
	}
	
	@PutMapping("/update") 
	public HttpStatus update(@RequestBody Customer customer) {
		System.out.println(customer);
		
		try {
			service.update(customer);
		} catch (Exception e) {
			return HttpStatus.NOT_FOUND;
		}
		return HttpStatus.OK;
	}
	
	@GetMapping("/findAll") 
	public List<Customer> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/find/{id}")
	public Object find(@PathVariable Long id) {
		try {
			Customer customer=service.find(id);
			return customer;
		} catch (Exception e) {
			return HttpStatus.NOT_FOUND;
		}
	}
	 
	@DeleteMapping("/delete/{id}")
	public HttpStatus removeCustomer(@PathVariable Long id) {
		try {
			service.delete(id);
			return HttpStatus.OK;
		} catch(Exception e) {
			return HttpStatus.NOT_FOUND;
		}
	}

}
