package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.TaxCategoriesModel;

public interface TaxCategoriesRepository extends JpaRepository<TaxCategoriesModel, Integer>{

}
