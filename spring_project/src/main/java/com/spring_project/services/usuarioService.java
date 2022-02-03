package com.spring_project.services;

import java.util.List;
import java.util.Optional;

import com.spring_project.entities.usuario;

public interface usuarioService {

    usuario save(usuario u);
    List<usuario> findAll();
    Optional<usuario> findById(int id);
    boolean delete(int id);
}
