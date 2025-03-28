package com.springboot.exception;

public class BillNotFoundException extends RuntimeException{
	
	private String message;

	public BillNotFoundException() {
		super();
	}

	public BillNotFoundException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return this.message;
	}

	@Override
	public String toString() {
		return String.format("BillNotFoundException [message=%s]", message);
	}

}
