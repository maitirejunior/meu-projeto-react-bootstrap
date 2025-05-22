import logo from './logo.svg';
import './App.css';
import { NavBar } from './Componentes/NavBar.js';
import { Banner } from './Componentes/Banner.js';
import { Skills } from './Componentes/Skills.js';
import { Projects } from './Componentes/Projects.js';
import { Contact } from './Componentes/Contact.js';
import { Footer } from './Componentes/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
