
const OrderInfo = ({productName, price, quantity}) => {

    const totalPrice = (price * quantity)
/** calculating total price and quantity, then exporting it to OrderForm */
    return (
        <div>
            <h2>Order info</h2>
            <ul>
                <li>Product: {productName}</li>
                <li>Quantity: {quantity}</li>
                <li>Total: {totalPrice}€</li>

            </ul>
        </div>
    )
}


export default OrderInfo