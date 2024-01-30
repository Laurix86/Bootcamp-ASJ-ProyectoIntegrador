package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.models.CategoriesModel;
import com.bootcamp.backsistemagestion.repositories.CategoriesRepository;



@Service
public class CategoryService {

	@Autowired
	CategoriesRepository categoryRepository;
	
	//Obtener Categorías
	public List<CategoriesModel> getAllCategories(){
		return categoryRepository.findAll();
	}
	
	//Obtener Categorías por ID
	public Optional<CategoriesModel> getCategoriesById(int id){
		return categoryRepository.findById(id);
	}
	
	//Insert Categorías
	public String setCategories(CategoriesModel category) {
		categoryRepository.save(category);
		return "OK";
	}
	
	//Borrado lógio
	public String deleteCategory(int id) {
		CategoriesModel c = categoryRepository.findById(id).get();
		if(c != null) {
			c.setIs_deleted(true);
			categoryRepository.save(c);
			return "OK";
		}
		return "Error";
	}
	
	// Borrado físico
	public String eraseCategory(int id) {
		categoryRepository.deleteById(id);
		return "OK";
	}
}

/*
	
	//eliminar tarea
	public String elimiarTarea(int id) {
		tareaRepository.deleteById(id);
		return "Tarea eliminada correctamente";
	}
 * 
 * */
 