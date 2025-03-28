package com.springboot.exception;

public class CustomerNotFoundException extends RuntimeException {
	
	private String message;

	public CustomerNotFoundException() {
		super();
	}

	public CustomerNotFoundException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return this.message;
	}

	@Override
	public String toString() {
		return String.format("CustomerNotFoundException [message=%s]", message);
	}

}
