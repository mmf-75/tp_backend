package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.models.ClientesModel;
import com.example.demo.models.ProductosModel;
import com.example.demo.repositories.ClientesRepository;
import com.example.demo.repositories.ProductosRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesService {
    
    @Autowired
    ClientesRepository clientesRepository;

    @Autowired
    ProductosRepository productosRepository;

    public ArrayList<ClientesModel> getClientes() {
        return (ArrayList<ClientesModel>) clientesRepository.findAll();
    }
    
    public ClientesModel getCliente(Long idCliente) {
        return clientesRepository.findById(idCliente).get();
    }

    public ClientesModel postCliente(ClientesModel clientesModel) {
        return clientesRepository.save(clientesModel);
    }

    public ClientesModel putCliente(ClientesModel clientesModel) {
        return clientesRepository.save(clientesModel);
    }

    public void deleteCliente(Long idCliente) {
        clientesRepository.deleteById(idCliente);
    }

    public ArrayList<ClientesModel> getClientesByNombre(String nombre) {
        return clientesRepository.findByNombre(nombre);
    }

    public ClientesModel agregarProductoACarritoCliente(Long clienteId, Long productoId) {
        ClientesModel clientesModel = clientesRepository.findById(clienteId).get();
        ProductosModel productosModel = productosRepository.findById(productoId).get();
        clientesModel.addCarrito(productosModel);
        return clientesRepository.save(clientesModel);
    }

    public void eliminarProductoDeCarritoCliente(Long clienteId, Long productoId) {
        ClientesModel clientesModel = clientesRepository.findById(clienteId).get();
        ProductosModel productosModel = productosRepository.findById(productoId).get();
        clientesModel.deleteCarrito(productosModel);
        clientesRepository.save(clientesModel);
    }

    public void eliminarAllDeCarritoCliente(Long clienteId) {
        ClientesModel clientesModel = clientesRepository.findById(clienteId).get();
        clientesModel.deleteAllCarrito();
        clientesRepository.save(clientesModel);
    }

    public ClientesModel agregarProductoADeseadosCliente(Long clienteId, Long productoId) {
        ClientesModel clientesModel = clientesRepository.findById(clienteId).get();
        ProductosModel productosModel = productosRepository.findById(productoId).get();
        clientesModel.addDeseados(productosModel);
        return clientesRepository.save(clientesModel);
    }

    public void eliminarProductoDeDeseadosCliente(Long clienteId, Long productoId) {
        ClientesModel clientesModel = clientesRepository.findById(clienteId).get();
        ProductosModel productosModel = productosRepository.findById(productoId).get();
        clientesModel.deleteDeseados(productosModel);
        clientesRepository.save(clientesModel);
    }
    
}
