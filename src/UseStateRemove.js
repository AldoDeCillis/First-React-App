import React, {useState} from 'react'
import products from './products'

let useStateRemove = () => {
    let [prodotti , setProduct] = useState(products)

    let removeProduct = (id) => {
        let newProductsRow = prodotti.filter(product => product.id !== id);
        setProduct(newProductsRow)
    }
    return (
        <>
            {prodotti.map(product => {
                let {id, img, name, description} = product
                return (
                    <div className='bg-success' key={id}>
                        <img src={img} style={{width:'8rem',}} className='img-fluid' />
                        <span>{name}</span>
                        <span> | {description}</span>
                        <button onClick={() => removeProduct(id)} className='btn btn-danger'>X</button>
                    </div>
                )   
            })}
        </>
    );
};

export default useStateRemove;