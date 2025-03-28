package com.springboot.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="CUSTOMER_DETAILS")
public class Customer {
	
	@Id
	@Column(name="CUSTOMER_ID")
	@GeneratedValue(generator="CUSTOMER_SEQ")
	@SequenceGenerator(name="CUSTOMER_SEQ",sequenceName="CUSTOMER_SEQ", allocationSize=1)
	private Long custId;
	
	@Column(name="CUSTOMER_NAME")
	private String custName;
	
	@Column(name="ADDRESS")
	private String address;
	
	@Column(name="PHONE_NUMBER")
	private String phone;
	
	@Column(name="EMAIL_ID")
	private String emailId;
	
	@OneToOne(cascade=CascadeType.ALL) //if we give this, we do not have to give the foreign key
	@JoinColumn(name="METER_NUMBER")
	private Bill bill;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Customer(String custName, String address, String phone, String emailId, Bill bill) {
		super();
		this.custName = custName;
		this.address = address;
		this.phone = phone;
		this.emailId = emailId;
		this.bill = bill;
	}

	public Customer(Long custId, String custName, String address, String phone, String emailId, Bill bill) {
		super();
		this.custId = custId;
		this.custName = custName;
		this.address = address;
		this.phone = phone;
		this.emailId = emailId;
		this.bill = bill;
	}

	public Long getCustId() {
		return custId;
	}
	public void setCustId(Long custId) {
		this.custId = custId;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	//@JsonManagedReference
	public Bill getBill() {
		return bill;
	}

	public void setBill(Bill bill) {
		this.bill = bill;
	}

	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", custName=" + custName + ", address=" + address + ", phone=" + phone
				+ ", emailId=" + emailId + ", bill=" + bill + "]";
	}
	
	
	

}
