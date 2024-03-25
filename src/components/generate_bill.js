import React, { useState ,useEffect} from 'react'
import './products.css'

const Generate_bill = ({productData,clear}) => {
    const productList = productData ? Object.values(productData) : [];
    const [bill , setBill] = useState(0);
    const [displayBill , setDisplaybill] = useState(false);
    
    useEffect(() => {
     
            setDisplaybill(clear);
            setBill(0);
        
    }, [clear]);

   const CalculateBill = () => {
    let totalBill = 0;
    productList.forEach(product => {
        totalBill += product.price;
    });
    setBill(totalBill);
    setDisplaybill(true);
  }

  return (
    <div>
         <center>
       <fieldset  className="fieldset-custom">
       
       <table>
                    <thead>
                        <tr>
                            <th>Product-Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
       </fieldset> </center><br/><br/>
       <button type="button" className="btn-clk-gen" onClick={CalculateBill}>Generate Bill</button><br/><br/>
       <div className = "bill">
       {displayBill && (
    <table style={{ border: '1px dotted black', padding: '20px', margin: 'auto' }}>
        <thead>
            <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>PRICE</th>
            </tr>
        </thead>
        <tbody>
            {productList.map((product, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td style={{ textAlign: 'right' }}>Rs. {product.price}</td>
                </tr>
            ))}<br/>
            <tr>
                <td colSpan="2" rowspan="1" style={{ textAlign: 'right', fontWeight:"bold"}}>Total Cost :</td>
                <td style={{ textAlign: 'right' ,fontWeight:"500"}}>Rs. {bill}</td>
            </tr>
        </tbody>
    </table>
)}
       </div>
    </div>
  )
}

export default Generate_bill;