import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/Header/Header';
import Services from './component/Services/Services';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Home from './component/Home/Home';
import Doctors from './component/Doctors/Doctors';
import AuthProvider from './context/AuthProvider';
import Account from './component/Account/Account';

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

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
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
