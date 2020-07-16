import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/Navigation/NotFound/NotFound";
import UserPage from "./components/User/UserPage/UserPage";
import IndividualSupplementView from './components/Supplement/IndividualSupplementView/IndvSupplementView'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/IndividualSupplementView" component={IndividualSupplementView} />
        <Route path="/MyPage" component={UserPage} />
        <Route path="/" exact component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
