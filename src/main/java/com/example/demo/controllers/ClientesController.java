package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.ClientesModel;
import com.example.demo.services.ClientesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class ClientesController {
    
    @Autowired
    ClientesService clientesService;

    @CrossOrigin
    @GetMapping(path = "get/clientes")
    public ArrayList<ClientesModel> getClientes(){
        return clientesService.getClientes();
    }

    @CrossOrigin
    @PostMapping(path = "post/cliente")
    public ClientesModel postCliente(@RequestBody ClientesModel clientesModel){
        return clientesService.postCliente(clientesModel);
    }

}