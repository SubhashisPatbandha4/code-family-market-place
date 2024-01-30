package com.codefamily.backendmarketplace.mapper;

import com.codefamily.backendmarketplace.dto.ProductDto;
import com.codefamily.backendmarketplace.entity.Product;

public class ProductMapper {

        public static ProductDto mapToProductDTO(Product product){
            return new ProductDto(
                    product.getId(),
                    product.getName(),
                    product.getDesc(),
                    product.getPrice(),
                    product.getNoOfUnitSold(),
                    product.getSeller(),
                    product.getTechnology(),
                    product.getRating(),
                    product.getBlog(),
                    product.getType(),
                    product.getCategory()

            );
        }
        public static Product mapToProduct(ProductDto productDto){
            return new Product(
                    productDto.getId(),
                    productDto.getName(),
                    productDto.getDesc(),
                    productDto.getPrice(),
                    productDto.getNoOfUnitSold(),
                    productDto.getSeller(),
                    productDto.getTechnology(),
                    productDto.getRating(),
                    productDto.getBlog(),
                    productDto.getType(),
                    productDto.getCategory()
            );
        }

}
