package com.bootcamp.backsistemagestion.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


public class ResourceNotFoundException extends RuntimeException {
	
	private String message;
	
	public ResourceNotFoundException(String message) {
		super(message);
		this.message = message;
	}

}
