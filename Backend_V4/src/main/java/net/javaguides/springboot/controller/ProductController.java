package net.javaguides.springboot.controller;


import jakarta.mail.MessagingException;
import net.javaguides.springboot.model.Commande;
import net.javaguides.springboot.model.Product;
import net.javaguides.springboot.model.Utilisateur;
import net.javaguides.springboot.payload.request.ProduitCommande;
import net.javaguides.springboot.repository.CommandeRepository;
import net.javaguides.springboot.repository.ProdcutRepository;
import net.javaguides.springboot.repository.UtilisateurRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProdcutRepository prodcutRepository;

    @Autowired
    UtilisateurRepository utilisateurRepository;


    @Autowired
    CommandeRepository commandeRepository;


    @Autowired
    EmailService emailService;


    @GetMapping("/produit/category/{idCategory}")
    List<Product> getProducByCategory(@PathVariable(value = "idCategory", required = true) final Long idCategory) {
        return prodcutRepository.findByIdCategory(idCategory);
    }


    @GetMapping("/produit/{id}")
    Product getProducById(@PathVariable(value = "id", required = true) final Long id) {
        return prodcutRepository.findById(id).get();
    }


    @GetMapping("/produit/")
    List<Product> getAllProduct() {
        return prodcutRepository.findAll();
    }


    @PostMapping("/produit")
    public Product saveProduit(@RequestBody Product product) {

        Product productSaved = prodcutRepository.save(product);

        return productSaved;

    }


    @PostMapping("/produit/commande/{id}")
    public void saveCommande(@RequestBody List<ProduitCommande> produitCommandes,
                             @PathVariable(value = "id", required = false) final Long id) throws MessagingException, JsonProcessingException {


        System.out.println("hellox");


        Optional<Utilisateur> utilisateur = utilisateurRepository.findById(id);


        Commande commande = new Commande();
        commande.setDateCommande(LocalDate.now());
        commande.setDateLivraison(LocalDate.now());
        commande.setUser(utilisateur.get());
        commande.setStatut("CREER");
        commande.setProduitsList(getProduits(produitCommandes));
        double totale = produitCommandes.stream().mapToDouble(value -> value.getQuantite() * value.getPrix()).sum();
        commande.setMontant(totale);
        Commande save = commandeRepository.save(commande);
        System.out.println(save);
        emailService.sendMail(utilisateur.get(), produitCommandes, totale);


    }


    @GetMapping("/commande/{id}")
    List<Commande> getCommandeByUser(@PathVariable(value = "id", required = true) final Long id) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findById(id);

        return commandeRepository.findByUser(utilisateur.get());
    }


    private String getProduits(List<ProduitCommande> produitCommandes) throws JsonProcessingException {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        return ow.writeValueAsString(produitCommandes);
    }
}
