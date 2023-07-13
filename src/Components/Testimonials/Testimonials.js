import './Testimonials.css';
import CEO from '../Images/plsF6obTgms.png'

export default function Testimonials(){
    return(
        <div className='test-div'>
            <div>
                <img className='test-img' src={CEO} alt=''/>
            </div>

            <div className='test-cont'>
                <h3 className='test-h3'>Testimonials</h3>
                <h5 className='test-h5'>Jane Doe</h5>
                <h6 className='test-h6'>Company / CEO</h6>
                <p className='test-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla<span>turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec</span><span>duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit</span> pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras. </p>
                <p className='test-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla<span>turpis tempor enim. Vel tristique suspendisse eget sodales egestas.</span></p>
            </div>

            <div className='lines'>
            <h3 className='lines-h3'>01</h3>
            <div className='blue'></div>
            <div className='white'></div>
            <div className='white-2'></div>
            <h3 className='lines-h32'>03</h3>
            </div>
        </div>
    )
}