import { useState } from 'react'

const ProductForm = () => {
    const names = ["AMD Ryzen 9 7950X","AMD Ryzen 7 7800X3D", "Ryzen 5 7600X"]
    const prices = [650, 450, 250]

    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }
    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0))
    }


    return (
        <>
            <label>Product: </label>
            <select>
            {names.map((name, index) => (
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
   
        </>
        
        
    )
}


export default ProductForm