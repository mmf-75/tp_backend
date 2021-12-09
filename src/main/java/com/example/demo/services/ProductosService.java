package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.models.ProductosModel;
import com.example.demo.repositories.ProductosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductosService {

    @Autowired
    ProductosRepository productosRepository;

    public ArrayList<ProductosModel> getProductos() {
        return (ArrayList<ProductosModel>) productosRepository.findAll();
    }

    public ProductosModel postProducto(ProductosModel productosModel) {
        return productosRepository.save(productosModel);
    }
    
}