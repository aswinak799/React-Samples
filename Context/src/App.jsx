import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import { CartContext, ContextProvider } from './store/shopping-cart-context.jsx';

function App() {
  

  return (
    <ContextProvider>
      <Header/>
      <Shop />
    </ContextProvider>
  );
}

export default App;
