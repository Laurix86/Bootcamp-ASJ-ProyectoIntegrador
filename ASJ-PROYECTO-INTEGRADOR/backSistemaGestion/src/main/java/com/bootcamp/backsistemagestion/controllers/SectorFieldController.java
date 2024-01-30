package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.models.SectorsFieldModel;
import com.bootcamp.backsistemagestion.services.SectorFieldService;


@RestController
@RequestMapping("/sectors")
public class SectorFieldController {

	@Autowired
	SectorFieldService sectorFieldService;
	
	@GetMapping()
	public ResponseEntity<List<SectorsFieldModel>> getSectorsField() {
		return ResponseEntity.ok(sectorFieldService.getAllSectorsField());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<SectorsFieldModel>> getSectorFieldById(@PathVariable int id) {
		return ResponseEntity.ok(sectorFieldService.getSectorFieldById(id));
	}
}
