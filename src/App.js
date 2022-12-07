import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Products from './components/Products'
import ProductList from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products title="All Products" />} exact />
          <Route
            path="/details"
            exact
            element={<ProductList title="Product" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
