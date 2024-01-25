package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.PurchasesOrderModel;

public interface PurchasesOrdersRepository extends JpaRepository<PurchasesOrderModel, Integer> {

}