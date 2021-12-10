package com.example.demo.repositories;

import java.util.ArrayList;

import com.example.demo.models.ProductosModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductosRepository extends CrudRepository<ProductosModel, Long>{

    ArrayList<ProductosModel> findByPrecio(Integer precio);
    
}
