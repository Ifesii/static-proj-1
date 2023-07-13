import './Banner.css';
import Ban from '../UI/Ban/Ban';

export default function Banner(){
    return(
        <div className='banner' id='Banner'>
            <Ban 
                number = '9854'
                description = 'Projects Completed'
            />

            <div className='line'></div>
            
            <Ban 
                className ='mid'
                number = '840'
                description = 'Clients'
            />

            <div className='line'></div>

            <Ban 
                number = '321'
                description = 'Active Clients'
            />

            <div className='line'></div>

            <Ban 
                number = '5410'
                description = 'Cups of Coffee'
            />
        </div>
    )
}