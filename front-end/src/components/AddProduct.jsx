import React from 'react'

const AddProduct = () => {
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
  
    const addProduct=()=>{
        console.log(name,price,category,company);
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