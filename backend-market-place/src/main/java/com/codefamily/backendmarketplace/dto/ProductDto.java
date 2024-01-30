package com.codefamily.backendmarketplace.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//We use DTO class to sent the data between CLIENT and SERVER
//1.Created a ProductMapper class to send the data between Client and Server
public class ProductDto {

    private Long id;
    private String name;
    private String desc;
    private long price;
    private double noOfUnitSold;
    private String seller;
    private String technology;
    private String rating;
    private String blog;
    private String Type;
    private String category;

}
