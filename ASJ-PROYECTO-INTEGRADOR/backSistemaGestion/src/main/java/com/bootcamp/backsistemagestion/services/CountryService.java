package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.models.CountriesModel;
import com.bootcamp.backsistemagestion.repositories.CountriesRepository;

@Service
public class CountryService {
	
	@Autowired
	CountriesRepository countryRepository;
	
	//Obtener paises
	public List<CountriesModel> getAllCountries(){
		return countryRepository.findAll();
	}
	
	//Obtener paises por ID
	public Optional<CountriesModel> getCountryById(int id){
		return countryRepository.findById(id);
	}
	
	//Insertar país --- por el momento sin uso
	public String setCountry(CountriesModel country) {
		countryRepository.save(country);
		System.out.println("Llegué al service");
		return "OK";
	}
	
	//Borrado lógico -- por el momento sin uso
	public String deleteCountry(int id) {
		CountriesModel c = countryRepository.findById(id).get();
		if(c != null) {
			c.setIs_deleted(true);
			return "OK";
		}
		return "Error";
	}
	
	//Borrado físico --- por el momento sin uso
	public String eraseCountry(int id) {
		countryRepository.deleteById(id);
		return "OK";
	}

}


 