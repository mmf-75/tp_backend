package com.example.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "categoria")
public class CategoriaModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categoria")
    private byte id;

    private String nombre;

    @OneToMany(mappedBy = "categoriaModel") 
    @Column(name = "productos")
    private List<ProductosModel> productosModel;

    public byte getId() {
        return id;
    }

    public void setId(byte id) {
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
