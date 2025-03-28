package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="ELECTRICITY_USER")
public class User {
	@Id
	@Column(name="USER_ID")
	@GeneratedValue(generator="USER_SEQ")
	@SequenceGenerator(name="USER_SEQ",sequenceName="USER_SEQ", allocationSize=1)
	private Long userId;
	
	@Column(name="USERNAME")
	private String username;
	
	@Column(name="PASSWORD")
	private String password;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}



	public User(Long userId, String username, String password) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
	}



	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + "]";
	} //it's required while debugging
	
}
