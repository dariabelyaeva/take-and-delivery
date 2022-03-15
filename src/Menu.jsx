import buddy from './img/buddy.jpg';
import waldo from './img/waldo.jpg';
import spicy from './img/spicy.jpg';
import dreams from './img/dreams.jpg';
import classic from './img/classic.jpg';
import cali from './img/cali.jpg';
import Product from './Product';

const Menu = (props) => {
    const { cart, setCart } = props;
    const addProduct = (product) => {
        const productIndex = cart.findIndex(p => p.id === product.id);
        if (productIndex === -1) {
            setCart([...cart, product]);
        } else {
            cart[productIndex].amount++;
            setCart([...cart]);
        }
    };
    const products = [
        {
            id: 1,
            img: dreams,
            title: 'Burger Dreams',
            price: 9.2,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 2,
            img: cali,
            title: 'Burger Cali',
            price: 8,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 3,
            img: spicy,
            title: 'Burger Spicy',
            price: 9.2,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 4,
            img: waldo,
            title: 'Burger Waldo',
            price: 10,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 5,
            img: buddy,
            title: 'Burger Bacon Buddy',
            price: 9.99,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 6,
            img: classic,
            title: 'Burger Classic',
            price: 8,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];
   return <section className="menu">
        <h2 className="menu-title">Browse our menu</h2>
        <p className="menu-description">Use our menu to place an order online, or phone our store to place a pickup order. Fast and fresh food.</p>
        <div className="menu-buttons">
            <a className="menu-button focus" href="#">Burgers</a>
            <a className="menu-button" href="#">Sides</a>
            <a className="menu-button" href="#">Drinks</a>
        </div>
        <ul className="product-list">
            {products.map(product => <Product product={product} addProduct={addProduct} />)}
        </ul>
        <button className="button">See Full Menu</button>
    </section>
};

export default Menu;