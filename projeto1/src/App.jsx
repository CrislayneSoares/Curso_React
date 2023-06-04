import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Membros from './pages/Membros'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Membros' element={<Membros/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
