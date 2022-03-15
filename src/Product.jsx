import { useState } from "react";

const Product = ({product, addProduct}) => {
    const [amount, setAmount] = useState(1);
    return (<li className="product-card">
        <img className="product-card-image" src={product.img} width="120" height="120" alt={product.title.toLowerCase().replace(' ', '-')} />
        <div className="product-card-content">
            <h3 className="product-card-title">{product.title}</h3>
            <p className="product-card-price">$ {product.price.toFixed(2)} USD</p>
            <div>
                <p className="product-card-description">{product.description}</p>
            </div>
            <div>
                <form>
                    <label>
                        <input type="number" min="1" step="1" value={amount} name="amount" onChange={(event) => {
                            setAmount(+event.target.value);
                        }} />
                    </label>
                    <button className="product-card-button button" type="button" onClick={() => addProduct({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        amount,
                    })}>
                        <span>Add to cart</span>
                    </button>
                </form>
            </div>
        </div>
    </li>);
};

export default Product;