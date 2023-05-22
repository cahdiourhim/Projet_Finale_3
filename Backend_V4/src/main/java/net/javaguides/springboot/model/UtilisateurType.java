package net.javaguides.springboot.model;

import jakarta.persistence.*;
import net.javaguides.springboot.model.TypeUtilisateur;
import net.javaguides.springboot.model.Utilisateur;

import java.io.Serializable;

@Entity
@Table(name = "utilisateur_type")
public class UtilisateurType implements Serializable {

    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private UtilisateurTypeId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("utilisateurId")
    private Utilisateur utilisateur;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("typeId")
    private TypeUtilisateur typeUtilisateur;

    public UtilisateurType() {}

    public UtilisateurType(Utilisateur utilisateur, TypeUtilisateur typeUtilisateur) {
        this.utilisateur = utilisateur;
        this.typeUtilisateur = typeUtilisateur;
        this.id = new UtilisateurTypeId(utilisateur.getNumUtilisateur(), typeUtilisateur.getIdType());
    }

    public UtilisateurTypeId getId() {
        return id;
    }

    public void setId(UtilisateurTypeId id) {
        this.id = id;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public TypeUtilisateur getTypeUtilisateur() {
        return typeUtilisateur;
    }

    public void setTypeUtilisateur(TypeUtilisateur typeUtilisateur) {
        this.typeUtilisateur = typeUtilisateur;
    }

}
