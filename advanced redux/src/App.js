import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData} from './store/cart-actions';

let initial = true;

function App() {
  const dispatch = useDispatch()
  const cartVisible = useSelector(state=>state.ui.cartVisible);
  const cart = useSelector(state=>state.cart);
  const notification = useSelector(state=>state.ui.notification);
  useEffect(() => {
    
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <>
    { notification && <Notification {...notification}/> }
    <Layout>
      {cartVisible && <Cart />}
      <Products />
    </Layout>
    </>
    
  );
}

export default App;
