package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.VentasModel;
import com.example.demo.services.VentasService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class VentasController {
    
    @Autowired
    VentasService ventasService;

    @CrossOrigin
    @GetMapping(path = "/get/ventas")
    public ArrayList<VentasModel> getVentas(){
        return ventasService.getVentas();
    }

    @CrossOrigin
    @GetMapping(path = "/get/ventas/{idVentas}")
    public VentasModel getVenta(@PathVariable Long idVentas){
        return ventasService.getVenta(idVentas);
    }

    @CrossOrigin
    @PostMapping(path = "/post/ventas")
    public VentasModel postVenta(@RequestBody VentasModel ventasModel){
        return ventasService.postVenta(ventasModel);
    }

    @CrossOrigin
    @PutMapping(path = "/put/ventas")
    public VentasModel putVenta(@RequestBody VentasModel ventasModel){
        return ventasService.putVenta(ventasModel);
    }

    @CrossOrigin
    @DeleteMapping(path = "/delete/ventas/{idVentas}")
    public void deleteVenta(@PathVariable Long idVentas){
        ventasService.deleteVenta(idVentas);
    }
}
