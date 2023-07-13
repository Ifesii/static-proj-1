import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Doings from './Components/Doings/Doings';
import Works from './Components/Works/Works';
import Banner from './Components/Banner/Banner';
import Testimonials from './Components/Testimonials/Testimonials';
import Team from './Components/Team/Team';
import Client from './Components/Clientele/Client';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Doings />
      <Works />
      <Banner />
      <Testimonials />
      <Team />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
