package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.ProductsModel;

public interface ProductsRepository extends JpaRepository<ProductsModel, Integer> {

}
