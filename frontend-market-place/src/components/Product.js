import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
const Product = () => {
  const [product, setProduct] = useState({})
  const { productId } = useParams();
  // console.log(productId)
  const selectedProduct = useSelector(state => state.products.productList.find(product => String(product.id) === productId))

  useEffect(() => {
    setProduct(selectedProduct)
  }, [selectedProduct])
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={6}>
          {/* Product Image */}
          <Grid item xs={1} md={6}>
            <VideoPlayer />
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {product.technology}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.desc}
              </Typography>
              <Typography variant="h5" gutterBottom>
                $ {product.price}
              </Typography>
              <Button variant="contained" color="primary">
                Pay and Download
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};



export default Product;
