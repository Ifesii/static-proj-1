import './Works.css';
import Button from '../UI/Button/Button';
import phone from '../Images/L0nipfx-Ry4.png';
import netflix from '../Images/UVfvFrp4x4E.png';
import tiktok from '../Images/sDwhXKJijyE.png';
import tab from '../Images/WS7tgu261f0.png';
import laptop from '../Images/NIo8Fd-RngE.png';

export default function Works(){
    return(
        <div className='work' id='Works'>
        <h2 className='work-h2'>Our works</h2>

        <div className='img-d'>
            <img src={phone} alt=''/>
            <img src={netflix} alt=''/>
            <img src={tiktok} alt=''/>
        </div>

        <div className='img-d2'>
        <div>
        <h3>NOT IMPRESSED?</h3>
        <p>Lorem ipsum dolor sit amet,<span>consectetur adipiscing elit.</span></p>
        <Button  
            description = 'See more'
        />
        </div>
        <div>
        <img src={tab} alt=''/>
        <img src={laptop} alt=''/>
        </div>
        </div>
        </div>
    );
};