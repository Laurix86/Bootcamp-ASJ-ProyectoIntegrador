package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.models.TaxCategoriesModel;
import com.bootcamp.backsistemagestion.repositories.TaxCategoriesRepository;

@Service
public class TaxCategoryService {

	@Autowired
	TaxCategoriesRepository taxCategoryRepository;
	
	//Obtener paises
	public List<TaxCategoriesModel> getAllTaxCategories(){
		return taxCategoryRepository.findAll();
	}
	
	//Obtener jurisdicciones por ID
	public Optional<TaxCategoriesModel> getTaxCategoryById(int id){
		return taxCategoryRepository.findById(id);
	}
	

	//Insertar jurisdicción --- por el momento sin uso
	public String setTaxCategory(TaxCategoriesModel taxCategory) {
		taxCategoryRepository.save(taxCategory);
		return "OK";
	}
	
	//Borrado lógico -- por el momento sin uso
	public String deleteTaxCategory(int id) {
		TaxCategoriesModel tc = taxCategoryRepository.findById(id).get();
		if(tc != null) {
			tc.setIs_deleted(true);
			return "OK";
		}
		return "Error";
	}


	//Borrado físico --- por el momento sin uso
	public String eraseTaxCategory(int id) {
		taxCategoryRepository.deleteById(id);
		return "OK";
	}
}
