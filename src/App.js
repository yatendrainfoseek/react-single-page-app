import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from './component/include/header';
import Home from './component/page/home';
import Footer from './component/include/footer';
import Stuff from './component/page/stuff';
import Contact from './component/page/contact';
import { Route,NavLink,HashRouter} from "react-router-dom";



function App() {
  return (






 
         

 <HashRouter>
    <div>
    <Header />
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/stuff" component={Stuff}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </div>
    <Footer />
  </HashRouter>
   
    
         

       
  );
}

export default App;
