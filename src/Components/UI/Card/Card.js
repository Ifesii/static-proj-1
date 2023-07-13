import './Card.css';


const Card = ({ title, description, image}) => {
    return(
        <div className='card'>
            <h2 className='card-title'>{title}</h2>
            <p className='card-p'>{description}</p>
            <img src={image} className='card-img' alt='icon'/>
        </div>
    );
};

//<img src={image} className='card-img' alt=''/>

export default Card 