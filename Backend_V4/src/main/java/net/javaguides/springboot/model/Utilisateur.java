package net.javaguides.springboot.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "utilisateur",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "mail")
        })
public class Utilisateur implements Serializable{

    public Utilisateur(){}

    //Attributs

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "num", unique = true)
    private Long numUtilisateur;

    @Column(name = "num_telephone", nullable = false)
    private String numTelephone;

    @Column(name = "nom", nullable = false)
    private String nomUtilisateur;

    @Column(name = "mail", nullable = false, unique = true)
    private String mail;

    @Column(name = "adresse", nullable = false)
    private String adresseUtilisateur;

    @Column(name = "ville", nullable = false)
    private String ville;

    @Column(name="login", nullable = false)
    private String login;

    @Column(name = "psword", nullable = false)
    private String psw;

    @Column(name = "civilite", nullable = false)
    private boolean civilite;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "utilisateur_type",
            joinColumns = @JoinColumn(name = "utilisateur_num"),
            inverseJoinColumns = @JoinColumn(name = "type_utilisateur_id_type"))
    private Set<TypeUtilisateur> types = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "vend",
            joinColumns = @JoinColumn(name = "num_utilisateur"),
            inverseJoinColumns = @JoinColumn(name="ref_produit"))
    private List<Product> produits = new ArrayList<>();

    public Utilisateur(String numTelephone, String nomUtilisateur, String mail, String adresseUtilisateur, String ville, String login, String psw, boolean civilite) {

        this.numTelephone = numTelephone;
        this.nomUtilisateur = nomUtilisateur;
        this.mail = mail;
        this.adresseUtilisateur = adresseUtilisateur;
        this.ville = ville;
        this.login = login;
        this.psw = psw;
        this.civilite = civilite;
    }



    //Methodes


    public boolean isCivilite() {
        return civilite;
    }

    public void setCivilite(boolean civilite) {
        this.civilite = civilite;
    }

    public Long getNumUtilisateur() {
        return numUtilisateur;
    }

    public void setNumUtilisateur(Long numUtilisateur) {
        this.numUtilisateur = numUtilisateur;
    }

    public String getNumTelephone() {
        return numTelephone;
    }

    public void setNumTelephone(String numTelephone) {
        this.numTelephone = numTelephone;
    }

    public String getNomUtilisateur() {
        return nomUtilisateur;
    }

    public void setNomUtilisateur(String nomUtilisateur) {
        this.nomUtilisateur = nomUtilisateur;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getAdresseUtilisateur() {
        return adresseUtilisateur;
    }

    public void setAdresseUtilisateur(String adresseUtilisateur) {
        this.adresseUtilisateur = adresseUtilisateur;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public List<Product> getProduits() {
        return produits;
    }

    public void setProduits(List<Product> produits) {
        this.produits = produits;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPsw() {
        return psw;
    }

    public void setPsw(String psw) {
        this.psw = psw;
    }


    public Set<TypeUtilisateur> getTypes() {
        return types;
    }

    public void setTypes(Set<TypeUtilisateur> types) {
        this.types = types;
    }

}
