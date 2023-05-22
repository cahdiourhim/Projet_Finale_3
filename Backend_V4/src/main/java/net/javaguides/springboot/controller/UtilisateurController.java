package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.Utilisateur;
import net.javaguides.springboot.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UtilisateurController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @GetMapping("/all")
    public List<Utilisateur> getUtilisateurs(){
        return this.utilisateurRepository.findAll();
    }

    @GetMapping("/{numUtilisateur}")
    public Utilisateur getUtilisateurByNumUtilisateur(@PathVariable Long numUtilisateur) {
        return utilisateurRepository.findByNumUtilisateur(numUtilisateur);
    }

}
