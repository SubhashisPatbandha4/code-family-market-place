
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import Searchbar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import ProductSell from './components/ProductSell';
//importing React Router
//==============================
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/productSell" element={<ProductSell />} />
          
        </Routes>
      </Router >

    </>
  );
}

export default App;
