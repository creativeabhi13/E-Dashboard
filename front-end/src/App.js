import './App.css';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrivateComponents from './components/PrivateComponents';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login'
import AddProduct from './components/AddProduct';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route element={<PrivateComponents/>}>
        <Route path="/" element={<h1>Products Listing Component</h1>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1>Update Listing Component</h1>}/>
        <Route path="/profile" element={<h1>Profile  Component</h1>}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
       
       </Route> 
        
        <Route path="/signup" element={<Signup/>}/> 
        <Route path='/login' element={<Login/>}/>
      </Routes>

      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
