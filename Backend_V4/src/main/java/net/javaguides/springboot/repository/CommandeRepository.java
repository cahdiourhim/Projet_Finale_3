package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Commande;
import net.javaguides.springboot.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Long> {


    List<Commande> findByUser(Utilisateur utilisateur);

}
