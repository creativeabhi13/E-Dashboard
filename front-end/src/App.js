import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>Products Listing Component</h1>}/>
        <Route path="/add" element={<h1>Add  Listing Component</h1>}/>
        <Route path="/update" element={<h1>Update Listing Component</h1>}/>
        <Route path="/profile" element={<h1>Profile  Component</h1>}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
