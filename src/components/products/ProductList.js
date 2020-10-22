import React from 'react'


function ProductList({details}) {
    return (
     
        <div className='row text-center ' >
        {details.map((person)=>{
            return(
                <>
                 <div className='col-md-4 col-sm-12 p-2 '>
                 <h3>{person.name}</h3>
                <img className='img-fluid' height='300' width='230'  src={person.image}   alt={person.name}/>
                  <p className="text-justify text-center">{person.title}</p>
                <div className="d-flex justify-content-around ">
                  <p className="font-weight-bold" >{person.price}</p>
                 <button className="mb-3"  style={{backgroundColor:"#FFDEAD",}}>Add to Cart</button>
               </div>
               </div>
              </>
            )   
        })}
           </div>
        
       
    )
}

export default ProductList
