package net.javaguides.springboot.model;

import jakarta.persistence.Embeddable;

import java.io.Serializable;


@Embeddable
public class UtilisateurTypeId implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long utilisateurId;

    private Long typeId;

    public UtilisateurTypeId() {}

    public UtilisateurTypeId(Long utilisateurId, Long typeId) {
        this.utilisateurId = utilisateurId;
        this.typeId = typeId;
    }

    public Long getUtilisateurId() {
        return utilisateurId;
    }

    public void setUtilisateurId(Long utilisateurId) {
        this.utilisateurId = utilisateurId;
    }

    public Long getTypeId() {
        return typeId;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UtilisateurTypeId that = (UtilisateurTypeId) o;
        return utilisateurId.equals(that.utilisateurId) && typeId.equals(that.typeId);
    }

    @Override
    public int hashCode() {
        int result = utilisateurId.hashCode();
        result = 31 * result + typeId.hashCode();
        return result;
    }
}
