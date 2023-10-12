import React, { useEffect } from "react";
import {useParams,useNavigate} from 'react-router-dom'

const Updateproduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
console.log(params);
getProductDetails();

  },[])

  const getProductDetails = async () =>
  {
    console.log(params)
    let result = await fetch(`http://localhost:5000/products/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCompany(result.company);
    setCategory(result.category);
  }

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/products/${params.id}`,
    {method:'Put',
    body:JSON.stringify({name, price, category, company}),
    headers:{
      'Content-type':"application/json"
    }
  }); 
   result = await result.json()
     console.log(result);
     navigate('/');
  };
  return (
    <div className="product">
      <h1>Update  Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />

      <button onClick={updateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default Updateproduct;
