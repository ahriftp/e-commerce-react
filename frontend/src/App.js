// Packages
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className = 'py-3'>
        <Container>
          <Route path = '/' component = {HomeScreen} exact/>
          <Route path = '/product/:id' component = {ProductScreen}/>
          <Route path = '/cart/:id?' component = {CartScreen} />
          <Route path = '/login' component = {LoginScreen} />
          <Route path = '/register' component = {RegisterScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
