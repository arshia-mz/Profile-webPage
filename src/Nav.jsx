import Logo from './assets/Logo.png';
import Button from './Button.jsx';
import NavItem from './NavItem';
export default function Nav()
{
    return(
        <nav className="nav">
            <div className='ham-menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src={Logo} className="nav-logo"/>
            <ul className="nav-list">
                <NavItem active={true}>
                    Home
                </NavItem>
                <NavItem >
                    About
                </NavItem>
                <NavItem >
                    Skills
                </NavItem>
                <NavItem >
                    Projects
                </NavItem>
                <NavItem >
                    Contacts
                </NavItem>
            </ul>
            <div className="nav-button">
                <Button>Let's Talk</Button>
            </div>
        </nav>
    );
}