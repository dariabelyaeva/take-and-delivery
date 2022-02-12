const Header = () =>
    <header className="page-header">
        <div className="page-header-up">
            <p>We're open and available for takeaway & delivery.</p>
            <a href="#">Order Now</a>
        </div>
        <nav className="navigation">
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
        </nav>
    </header>

export default Header;