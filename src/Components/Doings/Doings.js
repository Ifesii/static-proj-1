import './Doings.css';
import Card from '../UI/Card/Card';
import computer from '../Images/computer-line.png';
import terminal from '../Images/terminal-window-line.png';
import art from '../Images/artboard-2-line.png';
import diamond from '../Images/vip-diamond-line.png';
import bar from '../Images/bar-chart-2-line.png';
import brush from '../Images/paint-brush-line.png';
import Button from '../UI/Button/Button';

export default function Doings(){
    return(
        <section id='Doings'>
        <h2 className="doings-h2"><center>What we do</center></h2>
        <div className='t-card'>
        <Card 
            title ='App Development'
            description ='Some quick example text to build on the card title and make up the bulk of the content.'
            image = {computer}
        />
        
        <Card 
            title = 'Website Development'
            description = 'Some quick example text to build on the card title and make up the bulk of the content.'
            image = {terminal}
        />
        
        <Card 
            title = 'UI/UX Designing'
            description ='Some quick example text to build on the card title and make up the bulk of the content.'
            image = {art}
        />
         
        <Card 
            title = 'Digital Marketing'
            description ='Some quick example text to build on the card title and make up the bulk of the content.'
            image = {diamond}
        />
        </div>

        <div className='b-card'>
        <Card 
            title = 'SEO & Content Writing'
            description ='Some quick example text to build on the card title and make up the bulk of the content.'
            image = {bar}
        />

        <Card 
            title = 'Graphic Designing'
            description ='Some quick example text to build on the card title and make up the bulk of the content.'
            image = {brush}
        />

        <div className='soln'>
        <h3>SOLUTIONS FOR<span>YOUR BUSINESS</span></h3>
        <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit.</span></p>
        <Button 
            description = 'Learn more'
        />
        </div>
        </div>
        </section>
    );
};