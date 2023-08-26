import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from "./containers/Dashboard/Dashboard";

import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "./containers/Service/Service";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

import Auth from './components/FirebaseAuth';
import Login from './containers/Login'
import { useEffect } from "react";

const App = () => {
  let isAuth = localStorage.getItem("loggedIn")
  useEffect(() =>{
    isAuth = localStorage.getItem("loggedIn")
  },[])
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
  let routes = isAuth==="true"?(
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/service/:id" exact component={Service} />
      <Route path="*" render={() => <Dashboard wrongPage />} />
    </Switch>
  ):(
    <Switch>
      <Route path="*" render={() => <Login  />} />
    </Switch>
  )

  return (
    <div className="App">
      <Toolbar isAuth={isAuth}/>
      {toasterContainer}

      {routes}
    </div>
  );
};

export default withRouter(App);
