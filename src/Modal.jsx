const Modal = (props) => {
    const { cart, isModalOpened, setIsModalOpened} = props;
    return <div className="modal-overlay" onClick={() => setIsModalOpened(false)}>
        <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-button">
            <button className="button-close" onClick={() => setIsModalOpened(false)}><span>Close</span></button>
        </div>
        <h2 className="modal-title">CART</h2>
        <div>
            <ul>
                {cart.map(product => <li>({product.title}) ($ {product.price.toFixed(2)} USD) ({product.amount})</li>)}
            </ul>
        </div>
        <button className="button-checkout button">CHECKOUT</button>
        </div>
    </div>
};

export default Modal; 