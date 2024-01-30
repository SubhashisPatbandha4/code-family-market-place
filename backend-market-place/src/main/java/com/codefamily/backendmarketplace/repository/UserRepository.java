package com.codefamily.backendmarketplace.repository;


import com.codefamily.backendmarketplace.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//Once UserRepository extends User emtity we can perform CRUD methods on User JPA Entity.
//(User is a type Entity , primary key type)

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
