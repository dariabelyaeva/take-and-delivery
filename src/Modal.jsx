const Modal = (props) => {
    const { card } = props;
    return <div className="modal">
        <div className="modal-open">
        <h4>CARD</h4>
            <ul>
                {card.map(product => <li>{product.title} ({product.amount})</li>)}
            </ul>
        <button>CHECKOUT</button>
        </div>
    </div>
};

export default Modal; 