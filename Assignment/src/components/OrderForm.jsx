import { useState } from 'react'
import OrderInfo from './OrderInfo'; 
/*importing order info to so the changes show on the list */

const ProductForm = () => {
    /*naming products and prices for them */
    const pnames = ["AMD Ryzen 9 7950X","AMD Ryzen 7 7800X3D", "Ryzen 5 7600X"]
    const prices = [650, 450, 250]
    
    const [selectedProduct, setSelectedProduct] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1) /*quantity add */
    }
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0)) /*quantity reduction and preventing the counter to go into negative */
    }
    const ProductChange = (e) => {
        setSelectedProduct(e.target.value); 
    };


    return (
        <>
            <label>Product: </label>
            <select onChange={ProductChange} value={selectedProduct}> 
            {pnames.map((name, index) => (
            <option key={index} value={index}>
              {name} ({prices[index]}€) 
            </option>))}
            </select> 

            <div style ={{marginTop: '15px'}}> {/*Buttons for increasing and decreasing quantity */}
                <label>Quantity: </label>
                <button onClick={decreaseQuantity}>-</button>
                <span> {quantity} </span> {/*Using span just in case i wanted to style it*/}
                <button onClick={increaseQuantity}>+</button>
            </div>

            <OrderInfo /*renaming and rendering correct data for orderinfo */
                productName={pnames[selectedProduct]} 
                price={prices[selectedProduct]} 
                quantity={quantity} 
            />

        
        </>
        
        
    )
}
{/*You found the easter egg comment. This code was made by Teemuro aka T.R. aka KD */}

export default ProductForm