import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Services from './component/Services/Services';
import Doctors from './component/Doctors/Doctors';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Contact from './component/Contact/Contact';
import FAQ from './component/FAQ/FAQ';
import Appointment from './component/Appointment/Appointment';
import Treatment from './component/Treatment/Treatment';
import Review from './component/Review/Review';
import Statistics from './component/Statistics/Statistics';
import OurSolutions from './component/OurSolution/OurSolutions';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <About></About>
      <NotFound></NotFound>
      <Contact></Contact>
      <FAQ></FAQ>
      <Appointment></Appointment>
      <Treatment></Treatment>
      <Review></Review>
      <Statistics></Statistics>
      <OurSolutions></OurSolutions>
      <Footer></Footer>
    </>
  );
}

export default App;
