import { useSelector,useDispatch  } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import {updateCartInFirestore} from './store/cart-slice'

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCartInFirestore(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
