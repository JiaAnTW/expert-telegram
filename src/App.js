import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import Layout from './component/Layout';
import Recipt from "./Reciept";
import Accounting from "./Accounting";
import Home from "./Home";
import Setting from "./Setting";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/recipt" component={Recipt} />
            <Route path="/accounting" component={Accounting} />
            <Route path="/setting" component={Setting} />
          </Layout>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
