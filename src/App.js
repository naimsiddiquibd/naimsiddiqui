import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Experience from './Pages/Home/Experience/Experience';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import Services from './Pages/Home/Services/Services';
import Contact from './Pages/Home/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Portal from './Pages/Portal/Portal/Portal';
import SinglePost from './Pages/Portal/SinglePost/SinglePost';
import ProfilePic from './Pages/Portal/ProfilePic/ProfilePic';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
      <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/ProfilePic">
            <ProfilePic></ProfilePic>
          </PrivateRoute>
          <PrivateRoute path="/SinglePost/:PostId">
            <SinglePost></SinglePost>
          </PrivateRoute>
          <PrivateRoute path="/portal">
            <Portal></Portal>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/experience">
            <Experience></Experience>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
