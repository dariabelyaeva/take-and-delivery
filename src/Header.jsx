import main from './img/main.svg';
import cart from './img/cart.png';
import cart2 from './img/cart2.svg';
import cart3 from './img/cart3.svg';

const Header = ({isModalOpened, setIsModalOpened}) => 
    <header className="page-header">
        <div className="page-header-up">
                <p className="main-panel">We're open and available for takeaway & delivery.</p>
                <a className="main-source" href="#">Order Now</a>
        </div>
        <nav className="navigation">
            <div>
                <img src={main} width="36" height="46" alt=" " />
            </div>
            <ul className="navigation-list">
                <li className="navigation-item">
                    <a className="navigation-link main" href="#">Home</a>
                </li>
                <li className="navigation-item">
                    <a className="navigation-link" href="#">Order</a>
                </li>
                <li className="navigation-item">
                    <a className="navigation-link" href="#">Company</a>
                </li>
                <li className="navigation-item">
                    <a className="navigation-link" href="#">FAQ</a>
                </li>
                <li className="navigation-item">
                    <a className="navigation-link" href="#">Contact</a>
                </li>
            </ul>
            <div>
                <button className="navigation-cart" onClick={() => setIsModalOpened(true)}>
                    <img className="main-cart" src={cart} width="55" height="55" alt=" " />
                    <img className="cart"  src={cart2} width="25" height="17" alt=" " />
                    <img className="count" src={cart3} width="25" height="25" alt=" " />
                </button>
            </div>
        </nav>
    </header>

export default Header;