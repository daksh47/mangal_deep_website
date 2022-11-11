import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About_page from './pages/about/about_page';
import Exclu from './pages/exclusive/exclusive';
import Compare_ra from './pages/compare_ra/compare_ra';
import Product from './pages/product/product';
import Err from './pages/error/error';
import Brand from './pages/brands/brands';
import Single_brand from './pages/single_brand/single';
import Cart from './pages/cart/cart';
import Details from './pages/details/details';
import Account_page from './pages/account/account_page';
import Reset from './pages/reset/reset';
import Orders from './pages/orders/orders';
import SIngle from './pages/single_ord/single_ord';
import N_acc from './pages/n_acc/n_acc';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={ <Home /> } />
      <Route exact path='/home' element={<Home />}/>
      <Route exact path='/about' element={<About_page/>}/>
      <Route exact path='/exclusive' element={<Exclu/>}/>
      <Route exact path='/compare' element={<Compare_ra/>}/>
      <Route exact path='/products' element={<Product/>}/>
      <Route path='/products/:id/brands' element={<Brand/>}/>
      <Route path='/products/:id/brands/brand/:id/pos/:id' element={<Single_brand/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/placeOrder' element={<Details/>}/>
      <Route exact path='/account' element={<Account_page/>}/>
      <Route exact path='/resetPassword' element={<Reset/>}/>
      <Route exact path='/yourOrders' element={<Orders/>}/>
      <Route exact path='/yourOrders/ijjnnnuiabrbewajei84j3qj90j/312nmnnm9hr39ccn03jh424jindnajsnd3489/45435fa23231:id77824y273y47234h7h37nb9u7vcf' element={<SIngle/>}/> 
      <Route exact path='/createAccount' element={<N_acc/>}/>
      <Route excat path="*" element={<Err/>}/>
    </Routes>
  </Router>
  );
}

export default App;
