package com.codefamily.backendmarketplace.service.impl;

import com.codefamily.backendmarketplace.dto.UserDto;
import com.codefamily.backendmarketplace.entity.User;
import com.codefamily.backendmarketplace.exception.UserNotFoundException;
import com.codefamily.backendmarketplace.mapper.UserMapper;
import com.codefamily.backendmarketplace.repository.UserRepository;
import com.codefamily.backendmarketplace.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Override
    public UserDto createUser(UserDto userDto) {
        User user= UserMapper.mapToUser(userDto);

        User savedUser= userRepository.save(user);
        return UserMapper.mapToUserDTO(savedUser);


    }

    @Override
    public UserDto getUserById(Long userId) {
       User user = userRepository.findById(userId).orElseThrow(()->
                new UserNotFoundException("User is not exists with the given Id "+userId));

       return UserMapper.mapToUserDTO(user);

    }

    @Override
    public List<UserDto> getAllUsers() {
       List<User> users= userRepository.findAll();
        return users.stream().map((user)-> UserMapper.mapToUserDTO(user)).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user= userRepository.findById(userId).orElseThrow(()->new UserNotFoundException("User is not  found with the given id "+userId));

        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());

        User updatedUserObj= userRepository.save(user);

        return UserMapper.mapToUserDTO(updatedUserObj);
    }

    @Override
    public void deleteUser(Long userId) {
        User user= userRepository.findById(userId).orElseThrow(()->new UserNotFoundException("User is not  found with the given id "+userId));
        userRepository.deleteById(userId);
    }

    @Override
    public UserDto getUserByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("Userrrrr does not exist with the given email: " + email));
//        log.info("User is found with email "+email);
        return UserMapper.mapToUserDTO(user);
    }
}
