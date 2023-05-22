package net.javaguides.springboot.model;


import jakarta.persistence.*;

@Entity
@Table(name = "categorie")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_categorie", unique = true)
    private Long id;

    @Column(name = "nom_categorie", nullable = false)
    private String nom;


    @Column(name = "description_categorie", nullable = false)
    private String description;


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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
