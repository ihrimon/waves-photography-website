import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import AllProducts from './Pages/AllProducts/AllProducts';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Authentication/Register/Register';
import Purchase from './Pages/Home/Purchase/Purchase';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard';
import MakeAdmin from './Pages/DashBoard/Admin/MakeAdmin/MakeAdmin';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
