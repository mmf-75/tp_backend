package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.CategoriaModel;
import com.example.demo.services.CategoriaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @CrossOrigin
    @GetMapping(path = "/get/categorias/{idCategoria}")
    public CategoriaModel getCategoria(Byte idCategoria){
        return categoriaService.getCategoria(idCategoria);
    }

    @CrossOrigin
    @PostMapping(path = "/post/categorias")
    public CategoriaModel postCategoria(@RequestBody CategoriaModel categoriaModel){
        return categoriaService.postCategoria(categoriaModel);
    }

    @CrossOrigin
    @PutMapping(path = "/put/categorias")
    public CategoriaModel putCategoria(@RequestBody CategoriaModel categoriaModel){
        return categoriaService.putCategoria(categoriaModel);
    }

    @CrossOrigin
    @DeleteMapping(path = "/delete/categorias/{idCategoria}")
    public void deleteCategoria(@PathVariable Byte idCategoria){
        categoriaService.deleteCategoria(idCategoria);
    }

}
