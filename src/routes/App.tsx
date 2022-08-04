import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Layout } from '../components/layout/Layout'
import '../App.css';
import { Home } from '../pages/Home'


const App = () => {


  return (
    <>
      <Layout>
        <div className="w-full min-h-screen bg-neutral-800">
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </div>
      </Layout>
    </>
  );
};

export default App