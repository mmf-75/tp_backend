package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.ProductosModel;
import com.example.demo.services.ProductosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    @GetMapping(path = "/get/productos/{idProducto}")
    public ProductosModel getProducto(@PathVariable Long idProducto){
        return productosService.getProducto(idProducto);
    }

    @CrossOrigin
    @PostMapping(path = "/post/productos")
    public ProductosModel postProducto(@RequestBody ProductosModel productosModel){
        return productosService.postProducto(productosModel);
    }

    @CrossOrigin
    @PutMapping(path = "/put/productos")
    public ProductosModel putProducto(@RequestBody ProductosModel productosModel){
        return productosService.putProducto(productosModel);
    }

    @CrossOrigin
    @DeleteMapping(path = "/delete/productos/{idProducto}")
    public void deleteProducto(@PathVariable Long idProducto){
        productosService.deleteProducto(idProducto);
    }

    @CrossOrigin
    @GetMapping(path = "/get/productos/query")
    public ArrayList<ProductosModel> getProductosByPrecio(@RequestParam("precio") Integer precio){
        // Probablemente esto no sirva para nada
        return productosService.getProductosByPrecio(precio);
    }

}