package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.CategoriaModel;
import com.example.demo.services.CategoriaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(path = "/api")
@RestController
public class CategoriaController {
    
    @Autowired
    CategoriaService categoriaService;

    @CrossOrigin
    @GetMapping(path = "/get/categorias")
    public ArrayList<CategoriaModel> getCategorias(){
        return categoriaService.getCategorias();
    }
}
