import Nav from './Nav.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import './App.css';
export default function App() {
  return (
    <>
     <Nav/>
     <Header/>
     <main>
        <About/>
        <Skills/>
        <Projects/>
     </main>
     <footer>
      <p>
        Made By ArshiaMohammadzadeh2026
      </p>
     </footer>
    </>
  )
}

