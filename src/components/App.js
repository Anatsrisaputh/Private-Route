import React, { useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import VipFeature from './pages/VipFeature'
import AdminFeature from './pages/AdminFeature';

function App() {
  const [role, setRole] = useState('guest');  //guest,user,admin
  // admin -> all path
  // user -> home, about, VIPFeature
  // guest -> home, about
  permissionRole () {
    
  }
  return (
    <div className="App">
      <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/vip" component={VipFeature} />
    <Route exact path="/admin" component={AdminFeature} />
    <Redirect to="/" />
    </Switch>
    </div>
  );
}

export default App;
