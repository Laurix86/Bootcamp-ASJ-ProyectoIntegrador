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
}


/*
 *
	
	//insertar tarea
	public String crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return "Tarea insertada correctamente";
	}
	*/
 