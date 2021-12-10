package com.example.demo.repositories;

import com.example.demo.models.VentasModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VentasRepository extends CrudRepository<VentasModel, Long>{
    
}
