package com.codefamily.backendmarketplace.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity //used to treat Classes as JPA entity
@Table(name = "users") //
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name="email_id",nullable = false)
    private String email;
    @Column(name="password")
    private String password;

    @OneToMany
    @Column(name="selling_products")
    private Product[] sellingProducts ;


}
