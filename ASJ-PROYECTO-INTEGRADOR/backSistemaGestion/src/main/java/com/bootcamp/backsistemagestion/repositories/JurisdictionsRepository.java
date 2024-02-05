package com.bootcamp.backsistemagestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.backsistemagestion.models.JurisdictionsModel;
import com.bootcamp.backsistemagestion.models.ProvidersModel;

public interface JurisdictionsRepository extends JpaRepository<JurisdictionsModel, Integer> {

	@Query(value = "Select j.* FROM jurisdictions j WHERE j.countries_id_countries_id = :country", nativeQuery = true)
	List<JurisdictionsModel> getJurisdictionsByCountry(@Param("country") Integer country);
	
	
}
