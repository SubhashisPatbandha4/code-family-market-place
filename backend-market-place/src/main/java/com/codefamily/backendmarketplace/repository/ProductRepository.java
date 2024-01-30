package com.codefamily.backendmarketplace.repository;
import com.codefamily.backendmarketplace.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


//Once UserRepository extends Product entity we can perform CRUD methods on User JPA Entity.
//(User is a type Entity , primary key type)
public interface ProductRepository extends JpaRepository<Product,Long> {
}
