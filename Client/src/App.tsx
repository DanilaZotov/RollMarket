import { Link, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.tsx'
import OrderPage from './pages/OrderPage.tsx'

import './styles/Home.css'
import './App.css'


function App() {
  
  return (
    <>
      <section id="navbar" className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img className="nav-logo" src="img/logo-no-background.png"></img>
          </Link>
        </div>
        <div className="navbar-center">
          <Link to="/">Меню</Link>
          <Link to="/">Акции</Link>
          <Link to="/">Контакты</Link>
        </div>
        <div className="navbar-right">
          <Link to="/">
            <img className="nav-img" src="img/search.png"></img>
          </Link>
          <Link to="/Order">
            <img className="nav-img" src="img/shopping-bag.png"></img>
          </Link>
        </div>
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<OrderPage />} />
      </Routes>
      <footer>
        <div className='footer-box'>

        </div>
      </footer>
    </>
  )
}

export default App
