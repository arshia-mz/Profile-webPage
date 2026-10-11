import Nav from './Nav.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import './App.css';
import { useState } from 'react';
export default function App() {
  const [location , setLocation] = useState('Home');
  function getLocation(loc)
  {
    setLocation(loc);
  }

  if(location === 'About')
  {
    return(<>
      <Nav getloc={getLocation} location={location}/>
      <main>
        <About style={{height:'100%'}}/>
      </main>
      <footer>
      <p>
        Made By ArshiaMohammadzadeh2026
      </p>
     </footer>
      </>
    ); 
  }

  if(location === 'Skills')
  {
    return(<>
      <Nav getloc={getLocation} location={location}/>
      <main>
        <Skills style={{height:'100%'}}/>
      </main>
      <footer>
      <p>
        Made By ArshiaMohammadzadeh2026
      </p>
     </footer>
      </>
    ); 
  }

  if(location === 'Projects')
  {
    return(<>
      <Nav getloc={getLocation} location={location}/>
      <main>
        <Projects style={{height:'100%'}}/>
      </main>
      <footer>
      <p>
        Made By ArshiaMohammadzadeh2026
      </p>
     </footer>
      </>
    ); 
  }
  return (
    <>
     <Nav getloc={getLocation} location={location}/>
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

