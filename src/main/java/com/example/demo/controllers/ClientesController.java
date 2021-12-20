package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.ClientesModel;
import com.example.demo.services.ClientesService;
// import com.example.demo.utils.JWTUtil;

// import de.mkammerer.argon2.Argon2;
// import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(path = "/api")
public class ClientesController {
    
    @Autowired
    ClientesService clientesService;

    // @Autowired
    // private JWTUtil jwtUtil;

    // @CrossOrigin
    // @GetMapping(path = "/get/clientes")
    // public ArrayList<ClientesModel> getClientes(@RequestHeader(value="Authorization")String token){
    //     if(!validarToken(token)){
    //         return null;
    //     }
    //     return clientesService.getClientes();
    // }

    // private boolean validarToken(String token){
    //     String usuarioId = jwtUtil.getKey(token);
    //     return usuarioId != null; // Verificamos que no sea nulo
    // }

    @CrossOrigin
    @GetMapping(path = "/get/clientes")
    public ArrayList<ClientesModel> getClientes(){
        return clientesService.getClientes();
    }

    @CrossOrigin
    @GetMapping(path = "/get/clientes/{idCliente}")
    public ClientesModel getCliente(@PathVariable Long idCliente){
        return clientesService.getCliente(idCliente);
    }

    @CrossOrigin
    @PostMapping(path = "/post/clientes")
    public ClientesModel postCliente(@RequestBody ClientesModel clientesModel){

        // // Implementacion de ARGON2
        // Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        // // .hash(cant. Iteraciones, uso de memoria, paralelismo=hilosdeproceso, objeto a hashear);
        // String hash = argon2.hash(1, 1024, 1, clientesModel.getContrasenia());
        // clientesModel.setContrasenia(hash);

        return clientesService.postCliente(clientesModel);
    }

    @CrossOrigin
    @PutMapping(path = "/put/clientes")
    public ClientesModel putCliente(@RequestBody ClientesModel clientesModel){
        return clientesService.putCliente(clientesModel);
    }

    @CrossOrigin
    @DeleteMapping(params = "/delete/clientes/{idCliente}")
    public void deleteCliente(@PathVariable Long idCliente){
        clientesService.deleteCliente(idCliente);
    }

    @CrossOrigin
    @GetMapping(value="/get/clientes/query")
    public ArrayList<ClientesModel> getClientesByNombre(@RequestParam("nombre") String nombre) {
        return clientesService.getClientesByNombre(nombre);
    }

    //CARRITO

    @CrossOrigin
    @PutMapping("/{clienteId}/carrito/{productoId}")
    ClientesModel agregarProductoACarritoCliente(@PathVariable Long clienteId, @PathVariable Long productoId) {
        return clientesService.agregarProductoACarritoCliente(clienteId, productoId);
    }
    
    @CrossOrigin
    @DeleteMapping("/{clienteId}/carrito/{productoId}")
    void eliminarProductoDeCarritoCliente(@PathVariable Long clienteId, @PathVariable Long productoId){
        clientesService.eliminarProductoDeCarritoCliente(clienteId, productoId);
    }

    @CrossOrigin
    @DeleteMapping("/{clienteId}/carrito/all")
    void eliminarAllDeCarritoCliente(@PathVariable Long clienteId){
        clientesService.eliminarAllDeCarritoCliente(clienteId);
    }

    //DESEADOS

    @CrossOrigin
    @PutMapping("/{clienteId}/deseados/{productoId}")
    ClientesModel agregarProductoADeseadosCliente(@PathVariable Long clienteId, @PathVariable Long productoId) {
        return clientesService.agregarProductoADeseadosCliente(clienteId, productoId);
    }
    
    @CrossOrigin
    @DeleteMapping("/{clienteId}/deseados/{productoId}")
    void eliminarProductoDeDeseadosCliente(@PathVariable Long clienteId, @PathVariable Long productoId){
        clientesService.eliminarProductoDeDeseadosCliente(clienteId, productoId);
    }

}