package com.codefamily.backendmarketplace.controller;

import com.codefamily.backendmarketplace.dto.ProductDto;
import com.codefamily.backendmarketplace.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
@CrossOrigin("*")
public class ProductController {
    private ProductService productService;

    //Build add Product REST API
    @PostMapping
    //@PostMapping - we map incoming post request to this method
    //@RequestBpdy - annotation extracts JSON from HTTPS request and convert it to JPA objects


    public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto){
        ProductDto savedProduct=productService.createProduct(productDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }
    //Build get All Products REST API
    @GetMapping
    public ResponseEntity<List<ProductDto>> getAllProducts(){
        List<ProductDto> products=productService.getAllProducts();
        return ResponseEntity.ok(products);
    }
}
