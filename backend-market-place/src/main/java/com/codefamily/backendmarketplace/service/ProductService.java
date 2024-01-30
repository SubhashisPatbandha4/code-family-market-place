package com.codefamily.backendmarketplace.service;

import com.codefamily.backendmarketplace.dto.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto createProduct(ProductDto productDto);
//    UserDto getEmployeeById(Long employeeId);

    List<ProductDto> getAllProducts();

//    UserDto updateEmployee(Long employeeId,UserDto updatedEmployee);
//
//    void deleteEmployee(Long employeeId);
}
