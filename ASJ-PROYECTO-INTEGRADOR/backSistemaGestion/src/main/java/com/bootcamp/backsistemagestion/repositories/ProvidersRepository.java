package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.ProvidersModel;

public interface ProvidersRepository extends JpaRepository<ProvidersModel, Integer> {

}
