package net.javaguides.springboot.model;


import jakarta.persistence.*;

@Entity
@Table(name="note")
public class Note {

    public Note(){}

    //Attributs

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_not", unique = true)
    private long idNote;

    @Column(name = "note")
    private short note;

    @ManyToOne
    @JoinColumn(name = "num_utilisateur", nullable = false)
    private Utilisateur user;

    @ManyToOne
    @JoinColumn(name = "ref_produit", nullable = false)
    private Product produit;

    //Methodes

    public Product getProduit() {
        return produit;
    }

    public void setProduit(Product produit) {
        this.produit = produit;
    }
    public Utilisateur getUser() {
        return user;
    }

    public void setUser(Utilisateur user) {
        this.user = user;
    }
    public long getIdNote() {
        return idNote;
    }

    public void setIdNote(long idNote) {
        this.idNote = idNote;
    }

    public short getNote() {
        return note;
    }

    public void setNote(short note) {
        this.note = note;
    }



}
