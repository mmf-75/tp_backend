package com.example.demo.models;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "clientes")
public class ClientesModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private Long id;

    private String nombre;
    private String apellido;
    @Column(name = "fecha_nacimiento")
    private String fechaNacimiento;
    private String email;
    private String telefono;
    private String contrasenia; 

    private String provincia;
    private String localidad;
    @Column(name = "codigo_postal")
    private String codigoPostal;
    private String direccion; 

    @OneToMany(mappedBy = "clientesModel") 
    private List<VentasModel> ventas;

    @ManyToMany
    @JoinTable(
            name = "carrito",
            joinColumns = @JoinColumn(name = "cliente_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    Set<ProductosModel> carrito = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "deseados",
            joinColumns = @JoinColumn(name = "cliente_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    Set<ProductosModel> deseados = new HashSet<>();

    public ClientesModel() {
        List<VentasModel> ventas = new ArrayList<VentasModel>();
        this.ventas = ventas;
    }

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

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public String getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public List<VentasModel> getVentas() {
        return ventas;
    }

    public void setVentas(List<VentasModel> ventas) {
        this.ventas = ventas;
    }

    public Set<ProductosModel> getCarrito() {
        return carrito;
    }

    public void setCarrito(Set<ProductosModel> carrito) {
        this.carrito = carrito;
    }

    public Set<ProductosModel> getDeseados() {
        return deseados;
    }

    public void setDeseados(Set<ProductosModel> deseados) {
        this.deseados = deseados;
    }
    
    //CARRITO 

    public void addCarrito(ProductosModel productosModel){
        this.carrito.add(productosModel);
    }

    public void deleteCarrito(ProductosModel productosModel){
        this.carrito.remove(productosModel);
    }

    public void deleteAllCarrito(){
        this.carrito.clear();
    }

    //DESEADOS

    public void addDeseados(ProductosModel productosModel){
        this.carrito.add(productosModel);
    }

    public void deleteDeseados(ProductosModel productosModel){
        this.carrito.remove(productosModel);
    }

}
