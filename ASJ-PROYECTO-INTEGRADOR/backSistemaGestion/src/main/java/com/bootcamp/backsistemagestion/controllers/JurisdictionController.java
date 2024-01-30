package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.models.JurisdictionsModel;
import com.bootcamp.backsistemagestion.services.JurisdictionService;

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
}
