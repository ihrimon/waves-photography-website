import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Login from './Pages/Authentication/Login/Login';
import AllProducts from './Pages/AllProducts/AllProducts';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Admin from './Pages/Admin/Admin';
import Register from './Pages/Authentication/Register/Register';
import Purchase from './Pages/Home/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
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
            <Route path="/purchase/:productId">
              <Purchase></Purchase>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
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
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
