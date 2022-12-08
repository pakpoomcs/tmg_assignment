import Products from './components/Products'
import ProductList from './components/ProductDetails'
import React , {useState} from 'react';

function App() {
  const [currProd, setCurrProd] = useState()
  const [title, setTitle] = useState("All Productsss")
  
  const sendToParent = num => {
      setCurrProd(num)
  }

  const getTitle = name => {
    setTitle(name)
    document.title = title
    console.log(name)
  }


  return (
    <div className="App">
      <ProductList index={currProd} />
      <Products handleClick={sendToParent} title={getTitle}/>
    </div>
  )
}



export default App
