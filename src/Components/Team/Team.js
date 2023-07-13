import './Team.css';
import man from '../Images/jns8BPueAgU.png';
import guy from '../Images/eyFbjKWlR2g.png';
import lady from '../Images/dmitry-vechorko-yXhJ_eQK0mE-unsplash 1.png';
import social from '../Images/Social.png';

export default function Team(){
    return(
        <div className='team-d' id='Team'>
        <h2 className='team-h2'>Our Team</h2>

        <div className='image-d'>
            <img className='image' src={man} alt=''/>
            
            <div className='mid-cont'>
                <center><h5 className='team-h5'>Jane Doe</h5></center>
                <center><h6 className='team-h6'>Company / CEO</h6></center>
                <center><p className='team-p'>Lorem ipsum dolor sit amet,<span> consectetur adipiscing elit. Blandit</span><span> id fringilla turpis tempor enim. </span> tristique suspendisse.</p></center>
                <img className='social' src={social} alt=''/>
            </div>

            <img className='image' src={guy} alt=''/>
            <img className='image' src={lady} alt=''/>
        </div>
        </div>
    );
};