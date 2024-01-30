package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.ErrorHandler;
import com.bootcamp.backsistemagestion.models.ProvidersModel;
import com.bootcamp.backsistemagestion.services.ProviderService;


import jakarta.validation.Valid;

@RestController
@RequestMapping("/providers")
public class ProviderController {

	
	@Autowired
	ProviderService providerService;
	
	@GetMapping()
	public ResponseEntity<List<ProvidersModel>> getProviders() {
		return ResponseEntity.ok(providerService.getAllProviders());
	}
	
	@GetMapping("/{id}")
	public ProvidersModel getProviderById(@PathVariable int id) {
		return providerService.getProviderById(id);
	}
	
	@PostMapping()
	public ResponseEntity<Object> saveProvider(@Valid @RequestBody ProvidersModel provider, BindingResult bindingResult ) {
		
		//pregunta si hay errores(del tipo modelo)
		if(bindingResult.hasErrors()) {
			
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			System.out.println(errors);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<>(providerService.setProvider(provider), HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
	// Edit provider
	@PutMapping("/{id}")
	public ResponseEntity<Object> editProvider(@PathVariable int id, @Valid @RequestBody ProvidersModel provider, BindingResult bindingResult) {
		
		if(bindingResult.hasErrors()) {
				
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			System.out.println(errors);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<>(providerService.editProvider(id, provider), HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
		}
		
	}
	
	
	// borrado lógico
	@PutMapping("/deleted/{id}")
	public ResponseEntity<String> deleteProvider(@PathVariable int id) {
		
		return ResponseEntity.ok(providerService.deleteProvider(id));
	}
	
	//borrado físico
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteProviderById(@PathVariable int id) {
		return ResponseEntity.ok(providerService.eraseProvider(id));
	}
	
}
