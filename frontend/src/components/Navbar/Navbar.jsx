import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Navbar.css'
import { Link } from "react-router-dom"

export const Navbar=() =>{
    const {total} = useContext(CartContext)
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <Link to="/"><button className='boton1'>🍕Home</button></Link>
      <Link to="/profile"><button className='boton1'>🔓Profile</button></Link>
      <Link to="/login"><button className='boton1'>🔐Login</button></Link>
      <button>🔒Logout</button>
      <Link to="/register"><button className='boton1'>🔐Register</button></Link>
      <div className="totalCompra">
      <Link to="/cart"><button className='boton2'>🛒Total:$ {total.toFixed(0)}</button></Link>
    </div>
    </nav>
        </>
    )
}

