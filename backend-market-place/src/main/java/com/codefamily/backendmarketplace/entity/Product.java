package com.codefamily.backendmarketplace.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity //used to treat Classes as JPA entity
@Table(name = "products") //
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="product_name")
    private String name;
    @Column(name="product_description")
    private String desc;

    @Column(name="product_price")
    private long price;
    @Column(name="product_no_of_unit_sold")
    private double noOfUnitSold;

    @Column(name="product_seller")
    private String seller;

    @Column(name="product_technology")
    private String technology;

    @Column(name="product_rating")
    private String rating;

    @Column(name="product_blog")
    private String blog;
    private String Type;

    private String category;

}
