package com.example.demo.controllers;

import com.example.demo.models.ClientesModel;
import com.example.demo.services.ClientesService;
import com.example.demo.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class AuthController {

    //Inicio de sesion y autenticacion
    
    @Autowired
    private ClientesService usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    // @RequestMapping(value = "api/login", method = RequestMethod.POST)
    @CrossOrigin
    @PostMapping(path = "/login")
    public String login(@RequestBody ClientesModel usuario){

        ClientesModel usuarioLogueado = usuarioDao.obtenerUsuarioPorCredenciales(usuario);

        if(usuarioLogueado != null) {
            // Genera el TOKEN
            String tokenJwt= jwtUtil.create(String.valueOf(usuarioLogueado.getId()), usuarioLogueado.getEmail());
            return tokenJwt;
        }
        return "FAIL";
    }
}
