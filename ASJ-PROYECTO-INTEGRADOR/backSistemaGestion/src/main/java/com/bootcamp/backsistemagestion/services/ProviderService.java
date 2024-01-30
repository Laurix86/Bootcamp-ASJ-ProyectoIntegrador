package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.exceptions.ResourceNotFoundException;
import com.bootcamp.backsistemagestion.models.ProvidersModel;
import com.bootcamp.backsistemagestion.repositories.ProvidersRepository;


@Service
public class ProviderService {

	@Autowired
	ProvidersRepository providerRepository;
	

	//Obtener proveedores
	public List<ProvidersModel> getAllProviders(){
		return providerRepository.findAll();
	}
	
	//Obtener proveedores por ID
	public ProvidersModel getProviderById(int id){
		ProvidersModel p = providerRepository.findById(id).orElseThrow(
				() -> {
					throw new ResourceNotFoundException("No se halló al proveedor solicitado");
				});

		return p;
	
	}
	

	//Insertar proveedores 
	public String setProvider(ProvidersModel provider) {
		providerRepository.save(provider);
		return "OK";
	}
	
	// modificar proveedor
	public String editProvider(int id, ProvidersModel provider) {
		
		try {
			Optional<ProvidersModel> p = providerRepository.findById(id);
			if(p.isPresent()) {
				ProvidersModel auxP = p.get();
				providerRepository.save(auxP);
				return "Exito";
			}else {
				throw new Exception("Error al editar proveedor");
			}
		} catch (Exception e) {
			return e.getMessage();
		}
		
	}
	
		
	
	//Borrado lógico 
	public String deleteProvider(int id) {
		ProvidersModel p = providerRepository.findById(id).get();
		if(p != null) {
			p.setIs_deleted(true);
			return "OK";
		}
		return "Error";
	}


	//Borrado físico --- por el momento sin uso
	public String eraseProvider(int id) {
		providerRepository.deleteById(id);
		return "OK";
	}
}
