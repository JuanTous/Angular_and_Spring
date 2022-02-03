package com.spring_project.repositories;

import com.spring_project.entities.usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface usuarioRepository extends CrudRepository<usuario, Integer>{
    
}
