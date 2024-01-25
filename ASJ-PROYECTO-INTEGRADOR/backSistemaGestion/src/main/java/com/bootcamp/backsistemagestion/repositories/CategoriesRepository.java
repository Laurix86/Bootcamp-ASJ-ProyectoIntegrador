package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.CategoriesModel;

public interface CategoriesRepository extends JpaRepository<CategoriesModel, Integer> {

}
