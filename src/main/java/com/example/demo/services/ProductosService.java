package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.models.ProductosModel;
import com.example.demo.repositories.ProductosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductosService {

    // Se puede mejorar empleando ResponseEntity

    @Autowired
    ProductosRepository productosRepository;

    public ArrayList<ProductosModel> getProductos() {
        return (ArrayList<ProductosModel>) productosRepository.findAll();
    }

    public ProductosModel getProducto(Long idProducto) {
        return productosRepository.findById(idProducto).get();
    }

    public ProductosModel postProducto(ProductosModel productosModel) {
        return productosRepository.save(productosModel);
    }

    public ProductosModel putProducto(ProductosModel productosModel) {
        return productosRepository.save(productosModel);
    }

    public void deleteProducto(Long idProducto) {
        productosRepository.deleteById(idProducto);
    }

    public ArrayList<ProductosModel> getProductosByPrecio(Integer precio) {
        //probablemente esto no sirva para nada
        return productosRepository.findByPrecio(precio);
    }

    // public ProductosModel postProducto(ProductosModel productosModel, Byte idCategoria) {
    //     // Busca la categoría por ID. Si la encuentra la asigna al nuevo producto y lo
    //     // guarda en la base de datos. Si no la encuentra no hace nada.
    //     // Notas adicionales: Se puede mejorar utilizando EntityStatus:
    //     // https://www.baeldung.com/spring-response-entity
    //     if (categoriaRepository.existsById(idCategoria)) {
    //         CategoriaModel categoriaSeleccionada = categoriaRepository.findById(idCategoria).get();
    //         productosModel.setCategoriaModel(categoriaSeleccionada);
    //         return productosRepository.save(productosModel);
    //     } else {
    //         return null;
    //     }
    // }

}