package com.codefamily.backendmarketplace.mapper;

import com.codefamily.backendmarketplace.dto.UserDto;
//User is a JPA entity
import com.codefamily.backendmarketplace.entity.*;
public class UserMapper {
    public static UserDto mapToUserDTO(User user){
        return new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getSellingProducts()


        );
    }
    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getSellingProducts()

        );
    }
}
