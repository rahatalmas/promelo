import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
function App() {

  return (
    <>
        <BrowserRouter>
          <Nav/>
          <Routes>
             <Route path='/' Component={Home}/>  
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
