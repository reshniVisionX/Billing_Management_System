
import { useState } from 'react';
import './App.css';
import Products from './components/add_products';
import Bill from './components/generate_bill';

function App() {
  const [product,setProduct] = useState([]);
  const [clearSignal, setClearSignal] = useState(false)

   function handleClearBill(){
     setClearSignal(!clearSignal);
   }
  return (
    <div className="App">
      <h1 className='title1'>Canteen Billing Management System</h1>
      <Products productData={product} setProductData={setProduct} clear={handleClearBill}/>
      <br></br>
      <Bill productData={product} clear={clearSignal}/>
    </div>
  );
}

export default App;
