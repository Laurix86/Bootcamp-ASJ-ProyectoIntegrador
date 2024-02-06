package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.models.ImagesModel;
import com.bootcamp.backsistemagestion.repositories.ImagesRepository;

@Service
public class ImageService {
	
	@Autowired
	ImagesRepository imageRepository;
	
	//Obtener paises
		public List<ImagesModel> getAllImages(){
			return imageRepository.findAll();
		}
		
		//Obtener jurisdicciones por ID
		public Optional<ImagesModel> getImageById(int id){
			return imageRepository.findById(id);
		}
		
		public List<ImagesModel> getImagesByProduct(int id){
			return imageRepository.getImagesByProduct(id);
		}

		//Insertar jurisdicción --- por el momento sin uso
		public String setImage(ImagesModel image) {
			imageRepository.save(image);
			
			return "OK";
		}
}
