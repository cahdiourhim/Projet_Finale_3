package net.javaguides.springboot.model;



import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "commentaire")
public class Commentaire {

    public Commentaire() {}

    //Attributs

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_commentaire", unique = true)
    private long idCommentaire;

    @Column(name = "titre", nullable = false)
    private String titre;

    @Column(name = "contenu", nullable = false)
    private String contenu;

    @Column(name = "date_commentaire", nullable = false)
    private Date dateCommentaire;

    @ManyToOne
    @JoinColumn(name = "num_utilisateur", nullable = false)
    private Utilisateur user;

    @ManyToOne
    @JoinColumn(name = "ref_produit", nullable = false)
    private Product produit;

    //Methodes

    public long getIdCommentaire() {
        return idCommentaire;
    }

    public void setIdCommentaire(long idCommentaire) {
        this.idCommentaire = idCommentaire;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public Date getDateCommentaire() {
        return dateCommentaire;
    }

    public void setDateCommentaire(Date dateCommentaire) {
        this.dateCommentaire = dateCommentaire;
    }

    public Utilisateur getUser() {
        return user;
    }

    public void setUser(Utilisateur user) {
        this.user = user;
    }

    public Product getProduit() {
        return produit;
    }

    public void setProduit(Product produit) {
        this.produit = produit;
    }


}
