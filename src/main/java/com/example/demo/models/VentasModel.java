package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ventas")
public class VentasModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_venta")
    private Long id;
    
    @Column(name = "fecha_compra")
    private String fechaCompra;
    @Column(name = "fecha_entrega")
    private String fechaEntraga;
    @Column(name = "precio_final")
    private float precioFinal;

    @JsonIgnoreProperties({"ventas"})
    @ManyToOne()
    @JoinColumn(name = "id_cliente", nullable = false)
    private ClientesModel clientesModel;

    @JsonIgnoreProperties({"ventas"})
    @ManyToOne()
    @JoinColumn(name = "id_producto", nullable = false)
    private ProductosModel productosModel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(String fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public String getFechaEntraga() {
        return fechaEntraga;
    }

    public void setFechaEntraga(String fechaEntraga) {
        this.fechaEntraga = fechaEntraga;
    }

    public float getPrecioFinal() {
        return precioFinal;
    }

    public void setPrecioFinal(float precioFinal) {
        this.precioFinal = precioFinal;
    }

    public ClientesModel getClientesModel() {
        return clientesModel;
    }

    public void setClientesModel(ClientesModel clientesModel) {
        this.clientesModel = clientesModel;
    }

    public ProductosModel getProductosModel() {
        return productosModel;
    }

    public void setProductosModel(ProductosModel productosModel) {
        this.productosModel = productosModel;
    }

}
