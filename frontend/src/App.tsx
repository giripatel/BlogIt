
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup.tsx'
import Signin from './pages/Signin.tsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
