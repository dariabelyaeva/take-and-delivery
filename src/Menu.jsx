import buddy from './img/buddy.jpg';
import waldo from './img/waldo.jpg';
import spicy from './img/spicy.jpg';
import dreams from './img/dreams.jpg';
import classic from './img/classic.jpg';
import cali from './img/cali.jpg';

const Menu = (props) => {
    const { card, setCard } = props;
    const addProduct = (product) => {
        const productIndex = card.findIndex(p => p.title === product.title);
        //console.log(productIndex);
        if (productIndex === -1) {
            setCard([...card, product]);
        } else {
            card[productIndex].amount++;
            setCard([...card]);
        }
    };
   return <section>
        <h2>Browse our menu</h2>
        <p>Use our menu to place an order online, or phone our store to place a pickup order. Fast and fresh food.</p>
        <ul>
            <li>
                <img src={dreams} width='120' height='120' alt='burger-dreams' />
                <h3>Burger Dreams</h3>
                <p>$ 9.20 USD</p>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <form>
                        <label>
                            <input type='number' name='amount' />
                        </label>
                        <button type='button' onClick={() => addProduct({
                    title: 'burger',
                    amount: 1,
                })}>
                            <span>Add to card</span>
                        </button>
                    </form>
                </div>
            </li>
            <li>
                <img src={cali} width='120' height='120' alt='burger-dreams' />
                <h3>Burger Cali</h3>
                <p>$ 8.00 USD</p>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <form>
                        <label>
                            <input type='number' name='amount' />
                        </label>
                        <button type='button'>
                            <span>Add to card</span>
                        </button>
                    </form>
                </div>
            </li>
            <li>
                <img src={spicy} width='120' height='120' alt='burger-dreams' />
                <h3>Burger Spicy</h3>
                <p>$ 9.20 USD</p>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <form>
                        <label>
                            <input type='number' name='amount' />
                        </label>
                        <button type='button'>
                            <span>Add to card</span>
                        </button>
                    </form>
                </div>
            </li>
            <li>
                <img src={waldo} width='120' height='120' alt='burger-dreams' />
                <h3>Burger Waldo</h3>
                <p>$ 10.00 USD</p>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <form>
                        <label>
                            <input type='number' name='amount' />
                        </label>
                        <button type='button'>
                            <span>Add to card</span>
                        </button>
                    </form>
                </div>
            </li>
            <li>
                <img src={buddy} width='120' height='120' alt='burger-dreams' />
                <h3>Burger Bacon Buddy</h3>
                <p>$ 9.99 USD</p>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <form>
                        <label>
                            <input type='number' name='amount' />
                        </label>
                        <button type='button'>
                            <span>Add to card</span>
                        </button>
                    </form>
                </div>
            </li>
            <li>
                <img src={classic} width='120' height='120' alt='burger-dreams' />
                <h3>Burger Classic</h3>
                <p>$ 8.00 USD</p>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <form>
                        <label>
                            <input type='number' name='amount' />
                        </label>
                        <button type='button'>
                            <span>Add to card</span>
                        </button>
                    </form>
                </div>
            </li>
        </ul>
    </section>
};

/*const Menu = (props) => {
    const {card} = props;
    return <div>
         <ul>
            {card.map(product => <li>{product.title} ({product.amount})</li>)}
        </ul>
    </div>
}
*/

export default Menu;