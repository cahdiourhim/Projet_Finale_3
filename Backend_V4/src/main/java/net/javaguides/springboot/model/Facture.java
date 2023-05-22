package net.javaguides.springboot.model;



import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "facture")
public class Facture {

    public Facture(){}

    //Attributs

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_facture", unique = true)
    private long idFacture;

    @Column(name="montant_facture", nullable = false)
    private float montant_facture;

    @Column(name = "date_facture", nullable = false)
    private Date dateFacture;

    @Column(name = "adresse_facture", nullable = false)
    private String adresseFacture;

    @Column(name = "taux", nullable = false)
    private float tva;

    @ManyToOne
    @JoinColumn(name = "num_Commande", nullable = false)
    private Commande commande;

    //Methodes

    public Commande getCommande() {
        return commande;
    }

    public void setCommande(Commande commande) {
        this.commande = commande;
    }

    public long getIdFacture() {
        return idFacture;
    }

    public void setIdFacture(long idFacture) {
        this.idFacture = idFacture;
    }

    public float getMontant_facture() {
        return montant_facture;
    }

    public void setMontant_facture(float montant_facture) {
        this.montant_facture = montant_facture;
    }

    public Date getDateFacture() {
        return dateFacture;
    }

    public void setDateFacture(Date dateFacture) {
        this.dateFacture = dateFacture;
    }

    public String getAdresseFacture() {
        return adresseFacture;
    }

    public void setAdresseFacture(String adresseFacture) {
        this.adresseFacture = adresseFacture;
    }

    public float getTva() {
        return tva;
    }

    public void setTva(float tva) {
        this.tva = tva;
    }

}
