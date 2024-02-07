package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.exceptions.ResourceNotFoundException;
import com.bootcamp.backsistemagestion.models.JurisdictionsModel;
import com.bootcamp.backsistemagestion.models.ProvidersModel;
import com.bootcamp.backsistemagestion.models.SectorsFieldModel;
import com.bootcamp.backsistemagestion.models.TaxCategoriesModel;
import com.bootcamp.backsistemagestion.repositories.JurisdictionsRepository;
import com.bootcamp.backsistemagestion.repositories.ProvidersRepository;
import com.bootcamp.backsistemagestion.repositories.SectorsFieldRepository;
import com.bootcamp.backsistemagestion.repositories.TaxCategoriesRepository;


@Service
public class ProviderService {

	@Autowired
	ProvidersRepository providerRepository;
	
	@Autowired
	SectorsFieldRepository sfRep;
	
	@Autowired
	TaxCategoriesRepository tcRep;
	
	@Autowired
	JurisdictionsRepository jurisdictionRep;
	

	//Obtener proveedores
	public List<ProvidersModel> getAllProviders(){
		return providerRepository.findAll();
	}
	
	//Obtener proveedores por ID
	public ProvidersModel getProviderById(int id){
		ProvidersModel provider = providerRepository.findById(id).orElseThrow(
				() -> {
					throw new ResourceNotFoundException("No se halló al proveedor solicitado");
				});

		return provider;
	
	}
	
	public List<ProvidersModel> getProvidersBySectors(int catId){
		 return providerRepository.getProvidersBySectors(catId);
				
	}
	
	//Obtener proveedores activos
	public List<ProvidersModel> getActiveProviders() throws Exception{
		
		try {
			List<ProvidersModel> activeProviders = providerRepository.getActiveProviders();
			return activeProviders;
		} catch (Exception e) {
			throw new ResourceNotFoundException("No se hallaron proveedores activos.");
		}
		
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
			Optional<JurisdictionsModel> jm = jurisdictionRep.findById(provider.getJurisdictions_id().getJurisdictions_id());
			Optional<TaxCategoriesModel> tcm = tcRep.findById(provider.getTaxcategories_id().getTaxcategories_id());
			Optional<SectorsFieldModel> sfm = sfRep.findById(provider.getSectorsfield_id().getSectorsfield_id());
			
			JurisdictionsModel auxJm = new JurisdictionsModel();
			if(jm.isPresent()) {
				auxJm = jm.get();
				System.out.println("ju " + auxJm);
			}
			
			SectorsFieldModel auxSf = new SectorsFieldModel();
			if(sfm.isPresent()) {
				auxSf = sfm.get();
			}
			
			TaxCategoriesModel auxTc = new TaxCategoriesModel();
			if(tcm.isPresent()) {
				auxTc = tcm.get();
			}
			if(p.isPresent()) {
				ProvidersModel auxP = p.get();
				System.out.println("PROVIDER: " + provider.toString());
				auxP.setProviders_code(provider.getProviders_code());
				auxP.setProviders_denomination(provider.getProviders_denomination());
				auxP.setSectorsfield_id(auxSf);
				auxP.setProviders_logo(provider.getProviders_logo());
				auxP.setProviders_website(provider.getProviders_website());
				auxP.setProviders_email(provider.getProviders_email());
				auxP.setProviders_phone(provider.getProviders_phone());
				auxP.setJurisdictions_id(auxJm);
				auxP.setProviders_street(provider.getProviders_street());
				auxP.setProviders_addressnumber(provider.getProviders_addressnumber());
				auxP.setProviders_addressinfo(provider.getProviders_addressinfo());
				auxP.setProviders_city(provider.getProviders_city());
				auxP.setProviders_cp(provider.getProviders_cp());
				auxP.setProviders_cuit(provider.getProviders_cuit());
				auxP.setTaxcategories_id(auxTc);
				auxP.setProviders_contact_firstname(provider.getProviders_contact_firstname());
				auxP.setProviders_contact_lastname(provider.getProviders_contact_lastname());
				auxP.setProviders_contact_role(provider.getProviders_contact_role());
				auxP.setProviders_contact_phone(provider.getProviders_contact_phone());
				auxP.setProviders_contact_email(provider.getProviders_contact_email());
				
				providerRepository.save(auxP);
				return "Exito";
			}else {
				throw new Exception("Error al editar proveedor");
			}
		} catch (Exception e) {
			return e.getMessage();
		}
		
	}
	/*public ProvidersModel editProvider(int id, ProvidersModel provider) {
		return providerRepository.save(provider);
	}*/
		
	
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
