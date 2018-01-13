import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Rent from "./pages/Rent";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";



const App = () => 
	
    <Router>
      <div>
      <Navbar />
      <Wrapper>
       <Route exact path="/" component={Welcome} />
       <Route exact path="/Rent" component={Rent} />
      </Wrapper>
    </div>   
    </Router> 

export default App;