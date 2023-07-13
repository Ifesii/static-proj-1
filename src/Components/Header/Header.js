import './Header.css';
import Button from '../UI/Button/Button';
import people from '../Images/cherrydeck-A44EW3n2PgM-unsplash 1 (1).png';


export default function Header(){
    return(
        <header id='Header'>
            <div className='header-text'>
            <h2 className='h-h2'>WE ARE <span>DIGITAL AGENCY</span></h2>
            <p className='p-h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla<span>turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec</span><span>duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit</span> pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras.</p>

            <Button 
                description = 'Learn more'
            />

            <div className='no-line'>
            <h3>01</h3>
            <div className='idk'></div>
            <h3>03</h3>
            </div>
            </div>

            <div className='header-img'>
            <img src={people} className='people' alt=''/>
            </div>

        </header>
    )
}