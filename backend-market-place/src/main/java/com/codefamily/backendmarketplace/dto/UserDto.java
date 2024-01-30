package com.codefamily.backendmarketplace.dto;

import com.codefamily.backendmarketplace.entity.Product;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
//We use DTO class to sent the data between CLIENT and SERVER
//1.Created a UserMapper class to send the data between Client and Server
public class UserDto {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
//    private String userType;

    private Product[] sellingProducts ;
}
