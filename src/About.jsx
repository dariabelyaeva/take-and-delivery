import star from './img/star.png';
import title from './img/title.jpg';


const About = () => 
     <section className="about">
         <div className="block-about">
            <h3 className="about-main">Beautiful food & takeaway, <span>delivered</span> to your door.</h3>
            <p className="about-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae placeat laudantium dolore saepe similique vel ratione debitis eaque aliquam eligendi cupiditate facilis, rerum quos, veniam libero autem commodi. Ad, eveniet?</p>
            <button className="about-button button">Place an Order</button>
            <div className="about-rating">
                <img className="about-star" src={star} width="27" height="25" alt="star-rating" />
                <p>Trustpilot</p>
                <p className="rating" >4.8 out of 5 </p>
                <p className="rating-description" >based on 2000+ reviews</p>
            </div>
            
        </div>
        <div className="about-image">
            <img src={title} width="600" height="580" alt="" />
        </div>
    </section>;

export default About;