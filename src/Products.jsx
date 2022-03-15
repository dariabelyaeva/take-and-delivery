import girl from './img/girl.jpg';

const Products = () =>
    <section>
        <div className="products-block">
            <h3 className="title-products">The home of fresh products</h3>
            <p className="description-products">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae placeat laudantium dolore saepe similique vel ratione debitis eaque aliquam eligendi cupiditate facilis, rerum quos, veniam libero autem commodi. Ad, eveniet?</p>
            <button className="button-products button">Learn about us</button>
        </div>
        <div className="products-image">
            <img src={girl} width="523" height="614" alt="" />
        </div>
    </section>

export default Products;