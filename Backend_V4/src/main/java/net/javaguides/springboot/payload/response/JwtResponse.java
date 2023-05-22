package net.javaguides.springboot.payload.response;
import jakarta.persistence.Column;

import java.util.List;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String login;
    private String email;

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

    private String numTelephone;
    private String nomUtilisateur;
    private String adresseUtilisateur;
    private String ville;

    public JwtResponse(String token, Long id, String email, String numTelephone, String nomUtilisateur, String adresseUtilisateur, String ville, List<String> types) {
        System.out.println("Building Reponse");
        this.token = token;
        this.id = id;
        this.email = email;
        this.numTelephone = numTelephone;
        this.nomUtilisateur = nomUtilisateur;
        this.adresseUtilisateur = adresseUtilisateur;
        this.ville = ville;
        this.types = types;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String password;
    private List<String> types;



    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public List<String> getTypes() {
        return types;
    }
}
