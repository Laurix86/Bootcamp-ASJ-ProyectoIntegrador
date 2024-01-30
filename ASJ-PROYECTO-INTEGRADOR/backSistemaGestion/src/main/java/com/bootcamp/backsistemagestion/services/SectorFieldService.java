package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.models.SectorsFieldModel;
import com.bootcamp.backsistemagestion.repositories.SectorsFieldRepository;

@Service
public class SectorFieldService {

	@Autowired
	SectorsFieldRepository sectorFieldRepository;
	
	//Obtener paises
	public List<SectorsFieldModel> getAllSectorsField(){
		return sectorFieldRepository.findAll();
	}
	
	//Obtener jurisdicciones por ID
	public Optional<SectorsFieldModel> getSectorFieldById(int id){
		return sectorFieldRepository.findById(id);
	}
	

	//Insertar jurisdicción --- por el momento sin uso
	public String setSectorField(SectorsFieldModel sectorsField) {
		sectorFieldRepository.save(sectorsField);
		return "OK";
	}
	
	//Borrado lógico -- por el momento sin uso
	public String deleteSectorField(int id) {
		SectorsFieldModel sf = sectorFieldRepository.findById(id).get();
		if(sf != null) {
			sf.setIs_deleted(true);
			return "OK";
		}
		return "Error";
	}


	//Borrado físico --- por el momento sin uso
	public String eraseSectorField(int id) {
		sectorFieldRepository.deleteById(id);
		return "OK";
	}
}
