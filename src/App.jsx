import Nav from './Nav.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';

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
    </>
  )
}

