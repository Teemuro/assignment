
const OrderInfo = ({productName, price, quantity}) => {

    const totalPrice = (price * quantity)

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