package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.models.JurisdictionsModel;
import com.bootcamp.backsistemagestion.repositories.JurisdictionsRepository;

@Service
public class JurisdictionService {

	@Autowired
	JurisdictionsRepository jurisdictionRepository;
	
	//Obtener paises
	public List<JurisdictionsModel> getAllJurisdictions(){
		return jurisdictionRepository.findAll();
	}
	
	//Obtener jurisdicciones por ID
	public Optional<JurisdictionsModel> getJurisdictionById(int id){
		return jurisdictionRepository.findById(id);
	}
	
	public List<JurisdictionsModel> getJurisdictionsByCountry(int id){
		return jurisdictionRepository.getJurisdictionsByCountry(id);
	}

	//Insertar jurisdicción --- por el momento sin uso
	public String setJurisdiction(JurisdictionsModel jurisdiction) {
		jurisdictionRepository.save(jurisdiction);
		System.out.println("Service provincia");
		return "OK";
	}
	
	//Borrado lógico -- por el momento sin uso
		public String deleteJurisdiction(int id) {
			JurisdictionsModel j = jurisdictionRepository.findById(id).get();
			if(j != null) {
				j.setIs_deleted(true);
				return "OK";
			}
			return "Error";
		}


	//Borrado físico --- por el momento sin uso
	public String eraseJurisdiction(int id) {
		jurisdictionRepository.deleteById(id);
		return "OK";
	}
}
