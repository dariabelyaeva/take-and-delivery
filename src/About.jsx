import star from './img/star.svg';
import title from './img/title.jpg';
import Products from './Products';

const About = () => 
     <section>
        <h3>Beautiful food & takeaway, delivered to your door.</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae placeat laudantium dolore saepe similique vel ratione debitis eaque aliquam eligendi cupiditate facilis, rerum quos, veniam libero autem commodi. Ad, eveniet?</p>
        <button>Place an Order</button>
        <img scr={star} width="27" height="25" alt="star-rating" />
        <p>4.8 out of 5 </p>
        <p>based on 2000+ reviews</p>
        <div>
            <img src={title} width="600" height="580" alt="" />
        </div>
        <div><Products /></div>
    </section>;

export default About;