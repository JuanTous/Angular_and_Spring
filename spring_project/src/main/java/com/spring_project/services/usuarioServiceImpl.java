package com.spring_project.services;

import java.util.List;
import java.util.Optional;

import com.spring_project.entities.usuario;
import com.spring_project.repositories.usuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class usuarioServiceImpl implements usuarioService {

    @Autowired
    usuarioRepository repository;

    @Override
    public usuario save(usuario u) {
        return repository.save(u);
    }

    @Override
    public List<usuario> findAll() {
        return (List<usuario>) repository.findAll();
    }

    @Override
    public Optional<usuario> findById(int id) {
        return repository.findById(id);
    }

    @Override
    public boolean delete(int id) {
        try {
            repository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
