import './Client.css';
import mango from '../Images/mango.png';
import micro from '../Images/microsoft.png';
import nike from '../Images/nike.png';
import amazon from '../Images/amazon.png';

export default function Client(){
    return(
        <div className='client'>
        <h2 className='client-h2'>Clients</h2>

        <img className='c-image' src={mango} alt=''/>
        <img className='c-image' src={micro} alt=''/>
        <img className='c-image' src={nike} alt=''/>
        <img className='c-image' src={amazon} alt=''/>

        </div>
    );
};
