package com.example.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "categoria")
public class CategoriaModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categoria")
    private Long id;
    @Column(nullable = false)
    private String nombre;

    @JsonIgnoreProperties({"categoriaModel", "ventas"})
    @OneToMany(mappedBy = "categoriaModel")
    @Column(name = "productos")
    private List<ProductosModel> productosModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<ProductosModel> getProductosModel() {
        return productosModel;
    }

    public void setProductosModel(List<ProductosModel> productosModel) {
        this.productosModel = productosModel;
    }
    
}
