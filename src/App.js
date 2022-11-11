import Menu from "./menu/Menu";
import Home from "./pages/home/Home";
import Certificates from "./pages/certificates/Certificates";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";

function App() {
  return( 
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
  )
}

export default App;
