package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.ProductosModel;
import com.example.demo.services.ProductosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class ProductosController {
    
    @Autowired
    ProductosService productosService;

    @CrossOrigin
    @GetMapping(path = "/get/productos")
    public ArrayList<ProductosModel> getProductos(){
        return productosService.getProductos();
    }

    @CrossOrigin
    @PostMapping(path = "/post/productos/{idCategoria}")
    public ProductosModel postProducto(@RequestBody ProductosModel productosModel, @PathVariable Byte idCategoria){
        return productosService.postProducto(productosModel, idCategoria);
    }

}