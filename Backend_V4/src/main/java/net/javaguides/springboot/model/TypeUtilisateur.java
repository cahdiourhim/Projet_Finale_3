package net.javaguides.springboot.model;



import jakarta.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "type_utilisateur")
public class TypeUtilisateur implements Serializable {

    public TypeUtilisateur() {}

    public TypeUtilisateur(IType name){
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_type", unique = true)
    private Long idType;

    @Enumerated(EnumType.STRING)
    @Column(name = "nom_type", nullable = false, length = 20)
    private IType name;

    @ManyToMany(mappedBy = "types")
    Set<Utilisateur> utilisateurs = new HashSet<>();

    public Long getIdType() {
        return idType;
    }

    public void setIdType(Long idType) {
        this.idType = idType;
    }

    public IType getName() {
        return name;
    }

    public void setName(IType name) {
        this.name = name;
    }
}
