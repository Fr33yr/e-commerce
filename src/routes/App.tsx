import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Layout } from '../components/layout/Layout'
import '../App.css';
import { Home } from '../pages/Home'
import {Cart} from '../pages/Cart';
import { Products } from '../pages/Products';
import { Product } from '../pages/Product';


const App = () => {


  return (
    <>
      <Layout>
        <div className="w-full min-h-screen bg-neutral-800 pt-32 pb-16">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />}/>
            <Route path='/product/:_id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
};

export default App