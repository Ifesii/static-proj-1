import './Contact.css';
import { useState } from 'react';
import Button from '../UI/Button/Button';
import mail from '../Images/message-3-line.png';
import smap from '../Images/map-pin-2-line.png'; 
import road from '../Images/road-map-line.png';

export default function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message,setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)        
    };




    return(
        <div id='Contact'>
        <center><h2 className='contact-h2'>Contact Us</h2></center>

        <div className='contact'>
            


            <form onSubmit={handleSubmit}>
                 <input
                type= "text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input 
                type="email"
                id="email"
                placeholder="example@email.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <textarea 
                id="message"
                placeholder="Your message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />

            <div className='but-d'>
            <Button 
                type = 'submit'
                onClick = {handleSubmit}
                description = 'Send message' 
            />
            </div>

            </form>

            <div className='side'> 
            <div className='i-side'>
                <div>
                <img className='cont-img' src={mail} alt=''/>
                </div>
                <div className='t-side'>
                <h6>E-mail</h6>
                <p>sample@email.com</p>
                </div>
            </div>

            <div className='i-side'>
                <div>
                <img className='cont-img' src={smap} alt=''/>
                </div>
                <div className='t-side'>
                <h6>Address</h6>
                <p>no idea what to put here.</p>
                </div>
            </div>
            </div>
            <div className='b-d'>
             <img src={road} alt=''/>
             </div>
        </div>


        </div>
    );
};