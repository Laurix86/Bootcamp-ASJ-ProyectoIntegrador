package com.bootcamp.backsistemagestion.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.backsistemagestion.models.OrdersDetailModel;

public interface OrdersDetailRepository extends JpaRepository<OrdersDetailModel, Integer> {

}
