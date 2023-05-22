package net.javaguides.springboot.model;


import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="commande")
public class Commande implements Serializable{

    public Commande(){}

    //Attributs

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_commande", unique = true)
    private Long numCommande;

    @Column(name = "date_commande", nullable = false)
    private LocalDate dateCommande;

    @Column(name = "montant", nullable = false)
    private double montant;

    @Column(name = "statut", nullable = false)
    private String statut;

    @Column(name = "produits", nullable = false)
    private String produitsList;

    @Column(name = "date_livraison", nullable = false)
    private LocalDate dateLivraison;

    @ManyToMany
    @JoinTable(name = "composer",
            joinColumns = @JoinColumn(name = "num_commande"),
            inverseJoinColumns = @JoinColumn(name="ref_produit"))
    private List<Product> produits = new ArrayList<>();

    public Utilisateur getUser() {
        return user;
    }

    public void setUser(Utilisateur user) {
        this.user = user;
    }

    @ManyToOne
    @JoinColumn(name = "num_utilisateur", nullable = false)
    private Utilisateur user;

    //Methodes

    public Long getNumCommande() {
        return numCommande;
    }

    public void setNumCommande(Long numCommande) {
        this.numCommande = numCommande;
    }

    public LocalDate getDateCommande() {
        return dateCommande;
    }

    public void setDateCommande(LocalDate dateCommande) {
        this.dateCommande = dateCommande;
    }

    public double getMontant() {
        return montant;
    }

    public void setMontant(double montant) {
        this.montant = montant;
    }

    public LocalDate getDateLivraison() {
        return dateLivraison;
    }

    public void setDateLivraison(LocalDate dateLivraison) {
        this.dateLivraison = dateLivraison;
    }

    public List<Product> getProduits() {
        return produits;
    }

    public void setProduits(List<Product> produits) {
        this.produits = produits;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String status) {
        this.statut = status;
    }

    public String getProduitsList() {
        return produitsList;
    }

    public void setProduitsList(String produitsList) {
        this.produitsList = produitsList;
    }
}
