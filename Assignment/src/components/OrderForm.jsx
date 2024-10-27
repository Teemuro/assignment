import { useState } from 'react'
import OrderInfo from './OrderInfo';

const ProductForm = () => {
    const pnames = ["AMD Ryzen 9 7950X","AMD Ryzen 7 7800X3D", "Ryzen 5 7600X"]
    const prices = [650, 450, 250]
    
    const [selectedProduct, setSelectedProduct] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0))
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

            <div style ={{marginTop: '15px'}}>
                <label>Quantity: </label>
                <button onClick={decreaseQuantity}>-</button>
                <span> {quantity} </span> 
                <button onClick={increaseQuantity}>+</button>
            </div>

            <OrderInfo 
                productName={pnames[selectedProduct]} 
                price={prices[selectedProduct]} 
                quantity={quantity} 
            />

        
        </>
        
        
    )
}


export default ProductForm