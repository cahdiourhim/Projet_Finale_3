package net.javaguides.springboot.payload.request;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import net.javaguides.springboot.model.TypeUtilisateur;

import java.util.Set;

public class SignUpRequest {
    @NotBlank
    @Size(min = 10, max = 15)
    private String numTelephone;

    @NotBlank
    @Size(min = 4, max = 30)
    private String nomUtilisateur;

    @NotBlank
    @Size(min = 8, max = 50)
    private String adresseUtilisateur;

    @NotBlank
    @Size(min = 2, max = 30)
    private String ville;

    @NotBlank
    private boolean civilite;

    @NotBlank
    @Size(min = 3, max = 20)
    private String login;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;


    // Rajouter les types après
    @NotBlank
    private Long id;

    private Set<String> types;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getMail() {
        return email;
    }

    public void setMail(String email) {
        this.email = email;
    }

    public String getPsw() {
        return password;
    }

    public void setPsw(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public boolean isCivilite() {
        return civilite;
    }

    public void setCivilite(boolean civilite) {
        this.civilite = civilite;
    }

    public Set<String> getTypes() {
        return types;
    }

    public void setTypes(Set<String> types) {
        this.types = types;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
