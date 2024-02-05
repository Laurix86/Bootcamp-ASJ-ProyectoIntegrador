package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.exceptions.ErrorHandler;
import com.bootcamp.backsistemagestion.models.CountriesModel;
import com.bootcamp.backsistemagestion.services.CountryService;


import jakarta.validation.Valid;

@RestController
@RequestMapping("/countries")
public class CountryController {
	
	@Autowired
	CountryService countryService;
	
	@GetMapping()
	public ResponseEntity<List<CountriesModel>> getCountries() {
		return ResponseEntity.ok(countryService.getAllCountries());
	}
	
	@GetMapping("/{id}")
	public CountriesModel getCountryById(@PathVariable int id) {
		Optional<CountriesModel> auxCountry = countryService.getCountryById(id);
		
		return auxCountry.get();
	}
	
	@PostMapping()
	public ResponseEntity<Object> setCountry(@Valid @RequestBody CountriesModel country, BindingResult bindingResult ) {
		
//		//pregunta si hay errores(del tipo modelo)
		if(bindingResult.hasErrors()) {
			
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			
			
			System.out.println(errors);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		//System.out.println("llegué al post");
		
		return new ResponseEntity<>(countryService.setCountry(country), HttpStatus.OK);
	}
}
