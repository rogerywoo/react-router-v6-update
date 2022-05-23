import { Route, Routes, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate  to='/welcome' />}>  
          </Route>
          {/* You can use replace to replace as opposed to push
          <Route path='/' element={<Navigate replace  to='/welcome' />}>  
          </Route> */}
          <Route path='/welcome' element={<Welcome />}>
          </Route>
          <Route path='/products' element={<Products />}>
          </Route>
          <Route path='/products/:productId' element={<ProductDetail />}>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
