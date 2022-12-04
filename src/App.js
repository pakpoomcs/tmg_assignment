import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Products from './components/Products'
import ProductList from './components/ProductDetails'

// getProductPath(){

// }

function App() {
  return (
    <div className="App">
      <h1>this won't change</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} exact />
          <Route path="/details" exact element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
