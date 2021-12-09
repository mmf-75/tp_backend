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

    public ClientesModel postCliente(ClientesModel clientesModel) {
        return clientesRepository.save(clientesModel);
    }

}
