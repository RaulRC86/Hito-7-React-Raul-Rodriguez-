import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom"
import { setActiveClass } from '../../utilities/setActive'

export const Navbar=() =>{
    const {total} = useContext(CartContext)
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <NavLink to="/"><button className={setActiveClass}>🍕Home</button></NavLink>
      <NavLink to="/profile"><button className={setActiveClass}>🔓Profile</button></NavLink>
      <NavLink to="/login"><button className={setActiveClass}>🔐Login</button></NavLink>
      <button>🔒Logout</button>
      <NavLink to="/register"><button className={setActiveClass}>🔐Register</button></NavLink>
      <div className="totalCompra">
      <Link to="/cart"><button className='boton2'>🛒Total:$ {total.toFixed(0)}</button></Link>
    </div>
    </nav>
        </>
    )
}

