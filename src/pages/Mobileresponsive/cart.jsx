import "./cart.css";

function MobileCart(props) {
    const { product, movetowishlist, cardClick } = props;
    return (
        <div className="mobileproduct-card">
            <img src={product && product?.product?.displayImage} alt="Product Image" className="mobileproduct-image" />
            <div className="mobileproduct-info">
                <h2 className="mobileproduct-name">{product?.product?.name}</h2>
                <p className="mobileproduct-price">₹{product?.product?.price}</p>
                <p className="mobileproduct-rating">Rating: ★★★★☆</p>
            </div>
            <div className="mobileproduct-buttons">
                <button className="mobilebtn"  onClick={() => movetowishlist(product.product._id)}>Move to Wishlist</button>
                <button className="mobilebtn" onClick={() => cardClick(product.product._id)}>Remove</button>
            </div>
        </div>

    )

}
export default MobileCart;