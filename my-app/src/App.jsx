import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import Restaurants from "./components/Restaurants";
import RestaurantDetails from "./components/RestaurantDetails";


function App() {
  const [token, setToken] = useState(null); 

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;




