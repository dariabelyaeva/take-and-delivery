import main from './img/main.svg';
import logo from './img/logo.svg';

const Header = () => 
    <header className="page-header">
        <div className="page-header-up">
            <p>We're open and available for takeaway & delivery.</p>
            <a href="#">Order Now</a>
        </div>
        <nav className="navigation">
            <div>
                <img scr={logo} width='36' height='46' alt='' />
            </div>
            <ul className="navigation-list">
                <li className="navigation-item">
                    <a className="navigation-link" href="#">Home</a>
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
                <button>
                    <img scr={main} width='55' height='55' alt='' />
                </button>
            </div>
        </nav>
    </header>

export default Header;