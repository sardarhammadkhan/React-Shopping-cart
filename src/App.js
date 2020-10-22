import React from 'react';
import './App.css';
import Products from './components/products/Products';

function App() { 
  return (
    <>
   
 <header className='container-fluid bg-info text-center' >
 <div className='row ' style={{ backgroundColor:'#2F4F4F',color:'white'}}>
<div className='col'>
<h3 >React Shooping Cart</h3>
</div>
 </div>
 </header>
   <main>
   <Products/>
   </main>
 
   <footer className='  ' style={{backgroundColor:'#708090'}}>
   <div className='row  text-center m-0 p-0 '>
    <div className='col-12' >
   <p> All right reserved</p>
      </div>
    </div>
  </footer>  
 
  </>
  );
}

export default App;
