package net.javaguides.springboot.security.services;

import net.javaguides.springboot.model.TypeUtilisateur;
import net.javaguides.springboot.model.Utilisateur;
import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class UtilisateurImpl implements UserDetails {
    private static final long serialVersionUID = 1L;


    private Long num;

    private String login;

    private String mail;

    private String numTelephone;

    private String nomUtilisateur;

    private String adresseUtilisateur;

    private String ville;

    @JsonIgnore
    private String password;

    private boolean civilite;


    private Collection<? extends GrantedAuthority> authorities;

    public UtilisateurImpl(Long numUtilisateur, String login, String mail, String password, String numTelephone, String nomUtilisateur, String adresseUtilisateur, String ville, boolean civilite, Set<TypeUtilisateur> type, List<GrantedAuthority> authorities) {
        this.num = numUtilisateur;
        this.login = login;
        this.mail = mail;
        this.password = password;
        this.numTelephone = numTelephone;
        this.nomUtilisateur = nomUtilisateur;
        this.adresseUtilisateur = adresseUtilisateur;
        this.ville = ville;
        this.civilite = civilite;
        this.authorities = authorities;
    }

    public static UtilisateurImpl build(Utilisateur user) {
        List<GrantedAuthority> authorities = user.getTypes().stream()
                .map(typeUtilisateur -> new SimpleGrantedAuthority(typeUtilisateur.getName().name()))
                .collect(Collectors.toList());
        System.out.println("Regarde le mot de passe " +user.getPsw());
        return new UtilisateurImpl(
                user.getNumUtilisateur(),
                user.getLogin(),
                user.getMail(),
                user.getPsw(),
                user.getNumTelephone(),
                user.getNomUtilisateur(),
                user.getAdresseUtilisateur(),
                user.getVille(),
                user.isCivilite(),
                user.getTypes(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setUsername(String login) {
        this.login = login;
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

    public Long getNum() {
        return num;
    }

    public void setNum(Long num) {
        this.num = num;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UtilisateurImpl user = (UtilisateurImpl) o;
        return Objects.equals(num, user.num);
    }
}
