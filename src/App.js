import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Home from './component/Home/Home';
import Doctors from './component/Doctors/Doctors';
import AuthProvider from './context/AuthProvider';
import Account from './component/Account/Account';
import Appointment from './component/Appointment/Appointment';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import FAQ from './component/FAQ/FAQ';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Services from './component/Services/Services';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/account">
              <Account></Account>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/faq">
              <FAQ></FAQ>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/services/:serviceID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

      // <Header></Header>
      // <Banner></Banner>
      // <Services></Services>
      // <Doctors></Doctors>
      // <About></About>
      // <NotFound></NotFound>
      // <Contact></Contact>
      // <FAQ></FAQ>
      // <Appointment></Appointment>
      // <Treatment></Treatment>
      // <Review></Review>
      // <Statistics></Statistics>
      // <OurSolutions></OurSolutions>
      // <Footer></Footer>
