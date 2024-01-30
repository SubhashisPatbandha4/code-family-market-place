package com.codefamily.backendmarketplace.service.impl;

import com.codefamily.backendmarketplace.dto.ProductDto;
import com.codefamily.backendmarketplace.entity.Product;
import com.codefamily.backendmarketplace.mapper.ProductMapper;
import com.codefamily.backendmarketplace.repository.ProductRepository;
import com.codefamily.backendmarketplace.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        Product product= ProductMapper.mapToProduct(productDto);

        Product savedProduct=productRepository.save(product);
        return ProductMapper.mapToProductDTO(savedProduct);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> products=productRepository.findAll();
        return products.stream().map((product)-> ProductMapper.mapToProductDTO(product)).collect(Collectors.toList());

    }
}
