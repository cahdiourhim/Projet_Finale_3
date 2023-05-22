package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.IType;
import net.javaguides.springboot.model.TypeUtilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TypeUtilisateurRepository extends JpaRepository<TypeUtilisateur, Long> {
    Optional<TypeUtilisateur> findByName(IType name);
}
