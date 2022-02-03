package com.spring_project.controllers;

import java.util.List;
import java.util.Optional;
import com.spring_project.entities.usuario;
import com.spring_project.services.usuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class usuarioController {

    @Autowired
    usuarioServiceImpl service;

    @PostMapping
    public Boolean save(@RequestBody usuario u) {
        return !service.save(u).equals(null) ? true : false;
    }

    @GetMapping
    public List<usuario> getUsers() {
        return service.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<usuario> getUserById(@PathVariable("id") int id) {
        return service.findById(id);
    }

    @PutMapping(path = "/{id}")
    public boolean edit(@RequestBody usuario u, @PathVariable("id") int id) {
        u.setId(id);
        return !service.save(u).equals(null) ? true : false;
    }

    @DeleteMapping(path = "/{id}")
    public boolean delete(@PathVariable("id") int id) {
        return service.delete(id) ? true : false;
    }
}
