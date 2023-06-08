import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from "./containers/Dashboard/Dashboard";

import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "./containers/Service/Service";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
const App = () => {
  const toasterContainer = (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

  let routes = (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/service/:id" exact component={Service} />
      <Route path="*" render={() => <Dashboard wrongPage />} />
    </Switch>
  );

  return (
    <div className="App">
      <Toolbar />
      {toasterContainer}
      {routes}
    </div>
  );
};

export default withRouter(App);
