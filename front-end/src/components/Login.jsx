import React from 'react'


const Login =()=>{
    const [email,setEmail] =React.useState('');
    const [password,setPassword]=React.useState('');
    const handleLogin=()=>{
      console.log(email,password);
    }

    return(
        <div className='login'>
            <input className='inputBox' type="text" name="" id="" placeholder='Enter Email'  onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input className='inputBox' type="password" name="" id="" placeholder='Enter Passsword' onChange={(e)=>setPassword(e.target.value)} value={password} />
          <button onClick={handleLogin} className='appButton' type='button'>Login</button>
        </div>
    )
}
export default Login;