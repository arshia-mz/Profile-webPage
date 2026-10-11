import { useState } from 'react';
import Logo from './assets/Logo.png';
import Button from './Button.jsx';
import NavItem from './NavItem';
export default function Nav({location,getloc})
{ 
    const [navActive,setNavActive] = useState('not-acvtive-nav');
    function handelActiveNav()
    {
        if(navActive === 'active-nav')
        {
            setNavActive('not-acvtive-nav')
        }else{
            setNavActive('active-nav')
        }
    }
    return(
        <nav className="nav">
            <div className='ham-menu' onClick={handelActiveNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src={Logo} className="nav-logo"/>
            <ul className={`nav-list ${navActive}`}>
                <NavItem active={location === 'Home'} loc={getloc}>
                    Home
                </NavItem>
                <NavItem active={location === 'About'} loc={getloc}>
                    About
                </NavItem>
                <NavItem active={location === 'Skills'} loc={getloc}>
                    Skills
                </NavItem>
                <NavItem active={location === 'Projects'} loc={getloc}>
                    Projects
                </NavItem>
            </ul>
            <div className="nav-button">
                <Button>Let's Talk</Button>
            </div>
        </nav>
    );
}