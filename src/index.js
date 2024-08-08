import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import AuthIsLoaded from './components/AuthIsLoaded';
import SearchProvider from './SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider>
    <BrowserRouter>
      <AuthIsLoaded>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/product/*" element={<PageNotFound />} />
          </Routes>
        </Provider>
      </AuthIsLoaded>
    </BrowserRouter>
  </SearchProvider>
);

// app.get("/allproduct", verifyJWT, async (req, res) => {
//   const searchTerm = req.query.searchTerm;
//   const page = req.query.page ?? 1;
//   const limit = req.query.limit ?? 15;
//   const cursor = productCollection.find(!!searchTerm ? {
// $or : [
//   {
//     name:  new RegExp(`.*${searchTerm}.*`, 'i')
//   },
//   {
//     description:  new RegExp(`.*${searchTerm}.*`, 'i')
//   }
// ]
//   } : undefined)
//   // .sort( { _id: 1 } )
//   .skip( page > 0 ? ( ( page - 1 ) * limit ) : 0 )
//   .limit( limit );
//   const products = await cursor.toArray();
//   res.send(products);
// });