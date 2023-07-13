import './Footer.css';
import logo2 from '../Images/Asset 1 1.png';
import social2 from '../Images/Social.png';


export default function Footer(){
    return(
        <div className='footer' id='Footer'>
            <img src={logo2} alt=''/>
            <center><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id <span>fringilla turpis tempor enim. Vel tristique suspendisse.</span></p></center>

            <div className='h6-d'>
                <h6>Website development</h6>
                <h6>Branding</h6>
                <h6>UI/UX design</h6>
                <h6>Software</h6>
                <h6>Digital marketing</h6>
            </div>

            <div>
            <img className='s-2' src={social2} alt=''/>
            </div>

            <center><p>Copyright © 2023.</p></center>

        </div>
    );
};