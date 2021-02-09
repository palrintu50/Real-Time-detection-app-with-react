import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 import VisualDetection from './components/VisualDetection';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Example from './components/ExampleDetection';
import "./App.css";
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>

             <Route path="/" component={Home} exact/>
             <Route path="/visualdetectiont" component={VisualDetection}/>
             <Route path="/exampledetection" component={Example}/>
             <VisualDetection />
             
            
           </Switch>
        </div> 
      </BrowserRouter>
  
    );
  }
}
 
export default App;
