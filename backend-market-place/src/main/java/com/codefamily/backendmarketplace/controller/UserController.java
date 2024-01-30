package com.codefamily.backendmarketplace.controller;

import com.codefamily.backendmarketplace.dto.UserDto;
import com.codefamily.backendmarketplace.exception.UserNotFoundException;
import com.codefamily.backendmarketplace.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//api/v1/
@RequestMapping("/api")
@AllArgsConstructor
@CrossOrigin("*")
public class UserController {
    private UserService userService;

    //Build add User REST API
    @PostMapping("/signup")
    //@PostMapping - we map incoming post request to this method
    //@RequestBpdy - annotation extracts JSON from HTTPS request and convert it to JPA objects


    public ResponseEntity<UserDto> createEmployee(@RequestBody UserDto userDto) {
        try {
            userService.getUserByEmail(userDto.getEmail());
            return null;

        } catch (UserNotFoundException error) {
            UserDto savedUser = userService.createUser(userDto);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        }

      }

    //Build getEmployeeById REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long userId){
        UserDto userDto =userService.getUserById(userId);
        return ResponseEntity.ok(userDto);
    }

    //Build getAllEmployees REST API
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> users=userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    //Build updateEmployee by Id REST API
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateEmployeeById(@PathVariable("id" )long userId, @RequestBody UserDto userDto){
      UserDto userDto1 =  userService.updateUser(userId, userDto);
      return ResponseEntity.ok(userDto);
    }

    //Build Delete User by Id REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id" )long userId){
         userService.deleteUser(userId);
        return ResponseEntity.ok("User Delete Successfully");
    }

    //Build getLoginUserData by Email REST API

    @GetMapping("/login")
    public ResponseEntity<UserDto> getUserByEmailAndPassword(  @RequestParam("email") String email, @RequestParam("password") String password){

        UserDto userDto =userService.getUserByEmail(email);

        if (userDto != null && userDto.getPassword().equals(password)) {
            return ResponseEntity.ok(userDto);
        } else {
            // Return a 401 Unauthorized status code with a message
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(userDto);
            throw new UserNotFoundException("Userrrrrrrrrrrrrrrname and Password is not valid");
        }


    }

}
