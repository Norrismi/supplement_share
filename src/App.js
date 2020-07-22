import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/Navigation/NotFound/NotFound";
import UserPage from "./components/User/UserPage/UserPage";
import IndvSupplementView from './components/Supplement/IndividualSupplementView/IndvSupplementView'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn"  component={SignIn} />
        <Route path="/supplement/:id" component={IndvSupplementView} />
        <Route path="/MyPage" component={UserPage} />
        <Route path="/" exact component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
