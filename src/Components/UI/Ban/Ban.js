import './Ban.css';

const Ban = ({ number, description}) => {
    return(
        <div className='ban'>
            <h2 className='ban-no'>{number}</h2>
            <p className='ban-p'>{description}</p>
        </div>
    );
};


export default Ban;