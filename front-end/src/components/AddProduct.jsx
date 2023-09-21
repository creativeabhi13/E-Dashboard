import React from 'react'

const AddProduct = () => {
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
  
    const addProduct = async()=>{
        console.log(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id; 
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.log(result);
    }
  return (
    <div className='product'>
        <h1>Add Product</h1>
        <input className='inputBox' type="text" placeholder='Enter Product Name' onChange={(e)=>{setName(e.target.value)}}  value={name}/>
        <input className='inputBox' type="text" placeholder='Enter Product Price' onChange={(e)=>{setPrice(e.target.value)}} value={price} />
        <input className='inputBox' type="text" placeholder='Enter Product Category' onChange={(e)=>{setCategory(e.target.value)}} value={category} />
        <input className='inputBox' type="text" placeholder='Enter Product Company'  onChange={(e)=>{setCompany(e.target.value)}} value={company}/>

        <button onClick={addProduct} className='appButton'>Add Product</button>

    </div>
  )
}

export default AddProduct