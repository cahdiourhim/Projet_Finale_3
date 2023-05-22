package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.UtilisateurType;
import net.javaguides.springboot.model.UtilisateurTypeId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurTypeRepository extends JpaRepository<UtilisateurType, UtilisateurTypeId> {


}
