package com.bootcamp.backsistemagestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.backsistemagestion.models.ImagesModel;


public interface ImagesRepository extends JpaRepository<ImagesModel, Integer> {

	@Query(value= "SELECT i.* FROM images i WHERE i.product_id_products_id = :product", nativeQuery = true)
	List<ImagesModel> getImagesByProduct(@Param("product") Integer product);
	
	
}
