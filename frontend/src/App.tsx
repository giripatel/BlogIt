import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element={} path='/signup'/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
