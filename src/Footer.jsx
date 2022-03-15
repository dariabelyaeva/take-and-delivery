import main from './img/main.svg';
import instagram from './img/instagram.svg';
import facebook from './img/facebook.svg';
import youtube from './img/youtube.svg';

const Footer = () =>
    <div className="footer-main">
        <img src={main} width="36" height="46" alt=" " />
        <p>Takeaway & Delivery template for small - medium businesses.</p>
        <div>
            <ul>
                <li>company</li>
                <li>Home</li>
                <li>Order</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>TEMPLATE</li>
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licence</li>
                <li>Webflow University</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>FLOWBASE</li>
                <li>More Cloneables</li>
            </ul>
        </div>
        <div>
            <a href="#">
                <img src={instagram} width="40" height="40" alt="" />
            </a>
            <a href="#">
                <img src={facebook} width="40" height="40" alt="" />
            </a>
            <a href="#">
                <img src={youtube} width="40" height="40" alt="" />
            </a>
        </div>
    </div>


export default Footer;