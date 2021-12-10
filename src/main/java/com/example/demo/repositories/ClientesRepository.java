package com.example.demo.repositories;

import java.util.ArrayList;

import com.example.demo.models.ClientesModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientesRepository extends CrudRepository<ClientesModel, Long> {

    ArrayList<ClientesModel> findByNombre(String nombre);
    
}
