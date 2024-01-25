package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.CountriesModel;


public interface CountriesRepository extends JpaRepository<CountriesModel, Integer>{

}
