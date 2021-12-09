package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.CategoriaModel;
import com.example.demo.models.ProductosModel;
import com.example.demo.repositories.CategoriaRepository;
import com.example.demo.repositories.ProductosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductosService {

    @Autowired
    ProductosRepository productosRepository;

    @Autowired
    CategoriaRepository categoriaRepository;

    public ArrayList<ProductosModel> getProductos() {
        return (ArrayList<ProductosModel>) productosRepository.findAll();
    }

    public ProductosModel postProducto(ProductosModel productosModel, Byte idCategoria) {
        //Busca la categoría por ID. Si la encuentra la asigna al nuevo producto y lo guarda en la base de datos. Si no la encuentra no hace nada.
        //Notas adicionales: Se puede mejorar utilizando EntityStatus: https://www.baeldung.com/spring-response-entity
        if (categoriaRepository.existsById(idCategoria)) {
            CategoriaModel categoriaSeleccionada = categoriaRepository.findById(idCategoria).get();
            productosModel.setCategoriaModel(categoriaSeleccionada);
            return productosRepository.save(productosModel);
        } else {
            return null;
        }
    }
}