import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer.jsx'
import boy_banner from './components/assets/Banner_Cute_01.webp'
import girl_banner from './components/assets/Banner_for_Sari.webp'
function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Routes>
<Route path="/" element={<Shop />}/>
<Route path='/BOYS' element={<ShopCategory banner={boy_banner} category="BOY"/>}/>
<Route path='/GIRLS' element={<ShopCategory banner={girl_banner} category="GIRL"/>}/>
<Route path="/product" element={<Product/>}>
<Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
