import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import logo from '../Images/Asset 1 1.png';


export default function Navbar(){

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(
        <nav id='Navbar'>
            <img src={logo} className='logo' alt=""/>
            <ul className='list'>
                <li>
                    <Link 
                    to="Navbar" 
                    smooth={true} 
                    duration={600}>
                    Home
                    </Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link 
                    to="Header" 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-80}>
                    About
                    </Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link 
                    to="Doings" 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-60}>
                    Services
                    </Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link 
                    to="Works" 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-50}>
                    Portfolio
                    </Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link 
                    to="Banner" 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-50}>
                    Testimonials
                    </Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link 
                    to="Team" 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-50}>
                    Team
                    </Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link 
                    to="Contact" 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-60}>
                    Contacts
                    </Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link 
                    to="Footer" 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    exact='true'
                    offset={-80}>
                    Elements
                    </Link>
                </li>
            </ul>
        </nav>
        )
};