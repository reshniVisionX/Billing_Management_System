import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import {useState, useEffect} from 'react';
import './products.css'

const Add_products = (props) => {
   const price= [
        { id: 1, name: "Rose milk", price: 10 },
        { id: 2, name: "Watermelon", price: 15 },
        { id: 3, name: "Chocolate shake", price: 40 },
        { id: 4, name: "Tea", price: 5 },
        { id: 5, name: "Coffee", price: 7 },
        { id: 6, name: "Badam Milk", price: 20 },
        { id: 7, name: "Lemon juice", price: 10 },
       
    ];
    const {productData,setProductData}=props;
    const [data , setData] = useState({
        name:"",
        quantity:"",
        price:0
    })
    const handleChange=(event)=>{
       const {name,value} = event.target;
       setData({...data, [name]:value});
    }
    const [itemslist ,setItemslist] = useState([]);
    
      const HandleAddProduct = () => {
        const selectedProduct = price.find(product => product.name === data.name);
        if (selectedProduct) {
            const newProduct = { ...data, price: selectedProduct.price * parseInt(data.quantity) };
            setItemslist(prevItemslist => [...prevItemslist, newProduct]);
            setProductData(prevProductData => [...prevProductData, newProduct]);
            setData({ name: "", quantity: "", price: 0 });
        }
    }
   
    const HandleClearProduct=()=>{
       setItemslist([]);
       setProductData([]);
       props.clear();
    }
    useEffect(()=>{
        const selectedProduct = price.find(product => product.name === data.name);
        if(selectedProduct){
           const price = selectedProduct.price * parseInt(data.quantity);
           setData(prevData => ({
            ...prevData,
            price: isNaN(price)?0:price
           }))
        }
    },[data.name,data.quantity,data.price])
   
  return (
    <div>
        <h2 className='title'>Enter Products</h2>
        <form>
            <label htmlFor="name" className="label-quantity">Name:</label>
            <select id="name" name="name"  className="input-quantity" value={data.name} onChange={handleChange}>
                <option value="">---Select---</option>
                <option value="Rose milk">Rose Milk</option>
                <option value="Watermelon">Watermelon</option>
                <option value="Chocolate shake">Chocolate Shake</option>
                <option value="Tea">Tea</option>
                <option value="Coffee">Coffee</option>
                <option value="Badam Milk">Badam Milk</option>
                <option value="Lemon juice">Lemon Juice</option>
            </select>
            <label htmlFor="quantity" className="label-quantity">Quantity:</label>
             <input type="number" className="input-quantity" name="quantity" id="quantity" value={data.quantity} onChange={handleChange}></input>
             <br/>
             <label className="label-quantity">Price: {data.price}</label>
        </form>
        <button type ="button" className='btn-clk-add' onClick={HandleAddProduct}>Add Product</button>
      
        <button type ="button" className='btn-clk-clear' onClick={HandleClearProduct}>Clear Product</button>
    </div>
  )
}

export default Add_products