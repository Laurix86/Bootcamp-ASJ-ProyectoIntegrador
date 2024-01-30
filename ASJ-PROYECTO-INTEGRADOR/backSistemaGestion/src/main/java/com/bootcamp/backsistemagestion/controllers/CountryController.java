package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.models.CountriesModel;
import com.bootcamp.backsistemagestion.services.CountryService;

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
	public ResponseEntity<Optional<CountriesModel>> getCountryById(@PathVariable int id) {
		return ResponseEntity.ok(countryService.getCountryById(id));
	}
}
