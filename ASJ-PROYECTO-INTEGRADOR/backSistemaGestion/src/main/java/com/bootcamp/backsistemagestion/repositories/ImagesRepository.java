package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.ImagesModel;

public interface ImagesRepository extends JpaRepository<ImagesModel, Integer> {

}
