package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.models.ClientesModel;
import com.example.demo.repositories.ClientesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesService {
    
    @Autowired
    ClientesRepository clientesRepository;

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
    
}
