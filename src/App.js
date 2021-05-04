import React, { Component } from 'react'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import List from './components/List';
class App extends Component { 
    render() { 
        return ( 
            <div> 
              <Header/> 
              <h1>Component dari Class App</h1> 
              <List/> 
              <Footer judul='Halaman Footer' nama='Eko Setio W' /> 
            </div> 
        ); 
    } 
} export default App;