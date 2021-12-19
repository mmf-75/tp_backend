package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.models.VentasModel;
import com.example.demo.repositories.VentasRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VentasService {

    @Autowired
    VentasRepository ventasRepository;

    public ArrayList<VentasModel> getVentas() {
        return (ArrayList<VentasModel>) ventasRepository.findAll();
    }

    public VentasModel getVenta(Long idVentas) {
        return ventasRepository.findById(idVentas).get();
    }

    // public VentasModel postVenta(VentasModel ventasModel) {
    //     return ventasRepository.save(ventasModel);
    // }

    public void postVentas(VentasModel[] ventasModel) {
        for(int i = 0; i < ventasModel.length; i++){
            ventasRepository.save(ventasModel[i]);
        }
    }

    public VentasModel putVenta(VentasModel ventasModel) {
        return ventasRepository.save(ventasModel);
    }

    public void deleteVenta(Long idVentas) {
        ventasRepository.deleteById(idVentas);
    }

}
