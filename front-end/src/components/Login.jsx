import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Login =()=>{
    const [email,setEmail] =React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate =useNavigate();
    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
      {
        navigate("/")
      }
    })
    const handleLogin= async ()=>{
      console.log("email,password",email,password);
      let result = await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
          'Content-Type':'application/json'
        }
      });
      result=await result.json();
      console.log(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");
        }
        else{
          alert("Please Enter Correct Email and Password");
        }
    
    }

    return(
        <div className='login'>
            <h1>
            Login
        </h1>
            <input className='inputBox' type="text" name="" id="" placeholder='Enter Email'  onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input className='inputBox' type="password" name="" id="" placeholder='Enter Passsword' onChange={(e)=>setPassword(e.target.value)} value={password} />
          <button onClick={handleLogin} className='appButton' type='button'>Login</button>
        </div>
    )
}
export default Login;