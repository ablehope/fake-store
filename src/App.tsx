import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";
import NoPermissions from "./components/NoPermissions/NoPermissions";

import './App.css';

function App() {

    const [userRole, setUserRole] = useState(false);

    const checkPermissions = (component: JSX.Element) => {
        if(!userRole) {
            return <NoPermissions/>
        } else {
            return component;
        }
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={checkPermissions(<Products/>)} />
          <Route path="/products/:id" element={checkPermissions(<Product/>)} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
