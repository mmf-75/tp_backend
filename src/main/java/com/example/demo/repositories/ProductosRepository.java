package com.example.demo.repositories;

import com.example.demo.models.ProductosModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
interface ProductosRepository extends CrudRepository<ProductosModel, Long>{
    
}
