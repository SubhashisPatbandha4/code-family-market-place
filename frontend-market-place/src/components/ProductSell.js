import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  InputAdornment,
} from '@mui/material';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [technologyUsed, setTechnologyUsed] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [blogContent, setBlogContent] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Form submitted with data:', { productName, price, technologyUsed, videoFile, blogContent });
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleFormSubmit}>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center" gutterBottom>
                Product Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="number"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Technology Used"
                value={technologyUsed}
                onChange={(e) => setTechnologyUsed(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="file"
                label="Video Upload"
                onChange={handleVideoUpload}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Button component="label" variant="outlined">
                        Upload
                        <input type="file" hidden accept=".mp4, .mkv" />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Related Blog"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Container>
  );
};

export default ProductForm;
