package com.bootcamp.backsistemagestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.backsistemagestion.models.ProductsModel;

public interface ProductsRepository extends JpaRepository<ProductsModel, Integer> {

	@Query(value= "SELECT p.* FROM products p WHERE p.categories_id_categories_id = :category",  nativeQuery = true)
	List<ProductsModel> getProductsByCategory(@Param("category") Integer product);
	
	@Query(value= "SELECT p.* FROM products p WHERE p.id_deleted = false",  nativeQuery = true)
	List<ProductsModel> getActiveProducts();
}
