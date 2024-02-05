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
import com.bootcamp.backsistemagestion.models.JurisdictionsModel;
import com.bootcamp.backsistemagestion.services.JurisdictionService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/jurisdictions")
public class JurisdictionController {

	@Autowired
	JurisdictionService jurisdictionService;
	
	@GetMapping()
	public ResponseEntity<List<JurisdictionsModel>> getCountries() {
		return ResponseEntity.ok(jurisdictionService.getAllJurisdictions());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<JurisdictionsModel>> getCountryById(@PathVariable int id) {
		return ResponseEntity.ok(jurisdictionService.getJurisdictionById(id));
	}
	
	@GetMapping("/country/{id}")
	public ResponseEntity<List<JurisdictionsModel>> getJurisdictionsByCountry(@PathVariable int id) {
		return ResponseEntity.ok(jurisdictionService.getJurisdictionsByCountry(id));
		
	}
	
	@PostMapping()
	public ResponseEntity<Object> setJurisdiction(@Valid @RequestBody JurisdictionsModel jurisdiction, BindingResult bindingResult ) {
		System.out.println("llegué al post");
	//		//pregunta si hay errores(del tipo modelo)
			if(bindingResult.hasErrors()) {
				
				Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
				
				
				
				System.out.println(errors);
				
				return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
			}
			
			
			return new ResponseEntity<>(jurisdictionService.setJurisdiction(jurisdiction), HttpStatus.OK);
		}
}
