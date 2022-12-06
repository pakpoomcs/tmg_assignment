import { BrowserRouter, Route, Routes,Switch,Link,useHistory } from 'react-router-dom'
import './App.css'

import Products from './components/Products'
import ProductList from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <h1>this won't change</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products title="All Products"/>}  exact />
          <Route path="/details" exact element={<ProductList title="Product"/>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
