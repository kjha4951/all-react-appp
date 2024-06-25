import { useState } from 'react'
import { Header } from './Containers/Header'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import './App.css'
import ProductListing from './Containers/ProductListing.jsx'
import ProductDtail from './Containers/ProductDtail'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
    <Header/>
    <Router>
      <Routes>
     <Route path='/' Component={ProductListing}/>
     <Route path='/product/:productid' Component={ProductDtail}/>
     <Route>404 NOT FOUND!</Route>
     </Routes>
    </Router>
  </div>
  )
}

export default App
