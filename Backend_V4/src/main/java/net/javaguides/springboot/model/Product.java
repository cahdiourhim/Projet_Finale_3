package net.javaguides.springboot.model;


import jakarta.persistence.*;

@Entity
@Table(name = "produit")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ref_produit", unique = true)
    private Long id;

    @Column(name = "nom_produit", nullable = false)
    private String nom;


    @Column(name = "prix_vente_htva", nullable = false)
    private Double prix;


    @Column(name = "description_produit", nullable = false)
    private String description;

    @Column(name = "marqueproduit", nullable = false)
    private String marque;


    @Column(name = "id_categorie", unique = true)
    private Long idCategory;

    @Column(name = "quantite", nullable = false)
    private Double quantite;


    @Column(name = "image", nullable = false)
    private String image;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Double getPrix() {
        return prix;
    }

    public void setPrix(Double prix) {
        this.prix = prix;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public Long getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(Long idCategory) {
        this.idCategory = idCategory;
    }

    public Double getQuantite() {
        return quantite;
    }

    public void setQuantite(Double quantite) {
        this.quantite = quantite;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
