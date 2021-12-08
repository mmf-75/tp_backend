package com.example.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "productos")
public class ProductosModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private Long id;

    @Column(name = "nombre_producto")
    private String nombreProducto;
    private int precio;
    private short stock;
    private String descripcion;
    @Column(name = "foto_producto")
    private String fotoProducto;
    @Column(name = "id_subtipo")
    private Long idSubtipo;
    private byte descuento;

    @OneToMany(mappedBy = "productosModel") 
    private List<VentasModel> ventas;

    @ManyToOne()
    @JoinColumn(name = "id_categoria", nullable = false)
    private CategoriaModel categoriaModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public short getStock() {
        return stock;
    }

    public void setStock(short stock) {
        this.stock = stock;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFotoProducto() {
        return fotoProducto;
    }

    public void setFotoProducto(String fotoProducto) {
        this.fotoProducto = fotoProducto;
    }

    public Long getIdSubtipo() {
        return idSubtipo;
    }

    public void setIdSubtipo(Long idSubtipo) {
        this.idSubtipo = idSubtipo;
    }

    public byte getDescuento() {
        return descuento;
    }

    public void setDescuento(byte descuento) {
        this.descuento = descuento;
    }

    public List<VentasModel> getVentas() {
        return ventas;
    }

    public void setVentas(List<VentasModel> ventas) {
        this.ventas = ventas;
    }

    public CategoriaModel getCategoriaModel() {
        return categoriaModel;
    }

    public void setCategoriaModel(CategoriaModel categoriaModel) {
        this.categoriaModel = categoriaModel;
    }

}
