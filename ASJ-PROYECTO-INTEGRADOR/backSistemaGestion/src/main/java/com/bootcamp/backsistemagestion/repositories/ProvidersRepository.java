package com.bootcamp.backsistemagestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.backsistemagestion.models.ProvidersModel;

public interface ProvidersRepository extends JpaRepository<ProvidersModel, Integer> {

	@Query(value= "SELECT p.* FROM providers p WHERE p.is_deleted = false", nativeQuery = true)
	List<ProvidersModel> getActiveProviders();
	
	
	@Query(value= "SELECT p.* FROM providers p WHERE p.sectorsfield_id_sectorsfield_id = :sectorsfield", nativeQuery = true)
	List<ProvidersModel> getProvidersBySectors(@Param("sectorsfield") Integer sectorsfield);
	
}
