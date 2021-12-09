package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.models.CategoriaModel;
import com.example.demo.repositories.CategoriaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService {
    
    @Autowired
    CategoriaRepository categoriaRepository;

    public ArrayList<CategoriaModel> getCategorias() {
        return (ArrayList<CategoriaModel>) categoriaRepository.findAll();
    }

}
