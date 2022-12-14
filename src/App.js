import Products from './components/Products'
import ProductList from './components/ProductDetails'
import TopBar from './components/TopBar'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  document.title = "Product List"
  const [currProd, setCurrProd] = useState()
  const [title, setTitle] = useState('TMG - Product List')

  const sendToParent = (num) => {
    setCurrProd(num)
  }

  const getTitle = (name) => {
    setTitle(name)
    document.title = title
  }

  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products handleClick={sendToParent} title={getTitle}/>} />
          <Route path="/details" element={<ProductList index={currProd} title={title} />}
/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
