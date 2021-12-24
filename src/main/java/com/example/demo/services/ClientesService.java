package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.models.ClientesModel;
import com.example.demo.models.ProductosModel;
import com.example.demo.repositories.ClientesRepository;
import com.example.demo.repositories.ProductosRepository;
import com.example.demo.utils.Certificados;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Service
@Transactional
public class ClientesService {
    
    @PersistenceContext
    private EntityManager entityManager;

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



    // NESTASIO

    public ClientesModel obtenerUsuarioPorCredenciales(ClientesModel usuario) {

        // Está viendo a que usuario pertenece este mail
        // String query = "FROM Usuario WHERE email = :email";
        // List<ClientesModel> lista = entityManager.createQuery(query)
        //         .setParameter("email", usuario.getEmail())
        //         .getResultList();

        List<ClientesModel> lista = clientesRepository.findByEmail(usuario.getEmail());

        //Controla error en caso de que exista un email asociado a una cuenta y que la password retorne un "Null Pointer exception"
        if (lista.isEmpty()) {
            return null;
        }

        String passwordHashed = lista.get(0).getContrasenia();

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if (argon2.verify(passwordHashed, usuario.getContrasenia())) {//compara un HASH con una contraseñas
            return lista.get(0);
        }
        return null; //si las credenciales no son correctas
    }

    public Long logueo(Certificados certificados) {
        List<ClientesModel> lista = clientesRepository.findByEmail(certificados.getEmail());
        for (ClientesModel clientesModel : lista) {
            System.out.println(clientesModel.getContrasenia() + " " + certificados.getContrasenia());
            if (clientesModel.getContrasenia().equals(certificados.getContrasenia())) {
                System.out.println("VERDADERO");
                return clientesModel.getId();
            }
        }
        return null;
    }
    
}
