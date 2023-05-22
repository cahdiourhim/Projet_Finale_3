package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdcutRepository extends JpaRepository<Product, Long> {

    List<Product> findByIdCategory(Long id);

}
