package com.example.demo.repositories;

import com.example.demo.models.CategoriaModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends CrudRepository<CategoriaModel, Byte> {
    
}
