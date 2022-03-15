import table from './img/table.jpg';
import home from './img/home.jpg';
import phone from './img/phone.jpg';

const Instruction = () =>
    <section>
        <h2>How it works.</h2>
        <ul>
            <li>
                <img src={table} width="333" height="267" alt=" " />
                <span>Adapt your menu items</span>
                <span>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</span>
            </li>
            <li>
                <img src={phone} width="333" height="267" alt=" " />
                <span>Accept online orders & takeout</span>
                <span>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</span>
            </li>
            <li>
                <img src={home} width="333" height="267" alt=" " />
                <span>Manage delivery or takeout</span>
                <span>Manage your own logistics and take orders simply through the ecommerce system.</span>
            </li>
        </ul>
    </section>

export default Instruction;