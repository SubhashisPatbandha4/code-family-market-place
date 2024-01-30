
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllProducts } from '../redux/features/productsSlice';
import Footer from './Footer';
import Navbar from './Navbar';
import PaginationOutlined from './PaginationOutlined';
import { Link } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Products() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.searchedProduct)

  console.log(products)
  useEffect(() => {

    dispatch(fetchAllProducts())

  }, []);

  return (<>
    <Navbar />
    <ThemeProvider theme={defaultTheme}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {/* <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              MARKET PLACE
            </Typography> */}
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
              All kinds of University Level projects are available here
            </Typography> */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* {"Hi " + userData.firstName} */}
              <Link to={"/productSell"}>
                <Button variant="contained">Sell A Product</Button>
              </Link>

            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products && products.map((product, key) => (
              <Grid item key={key} xs={12} sm={6} md={4} s>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={() => navigator(`/product/${product.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <PaginationOutlined />
      <Footer />
    </ThemeProvider>
  </>
  );
}