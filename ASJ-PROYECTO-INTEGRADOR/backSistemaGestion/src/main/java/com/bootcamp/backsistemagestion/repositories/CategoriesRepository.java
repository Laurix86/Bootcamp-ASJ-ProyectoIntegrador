package com.bootcamp.backsistemagestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.backsistemagestion.models.CategoriesModel;


public interface CategoriesRepository extends JpaRepository<CategoriesModel, Integer> {

	@Query(value= "SELECT c.* FROM categories c WHERE c.is_deleted = false",  nativeQuery = true)
	List<CategoriesModel> getActiveCategories();
}
