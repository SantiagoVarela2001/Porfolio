import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from "../components/header/header"
import Body from '../components/body/body';
import Footer from "../components/footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Body />
      <Footer/>
    </div>
  );
}

export default App;

