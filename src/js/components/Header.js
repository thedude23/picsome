import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {Context} from "../../Context"
import "../../style.css"

function Header() {
    // Getting cartItems from Context
    const {cartItems} = useContext(Context)
    
    // If there any pictures in cart, display filled cart, else empty cart
    const cartDisplay = cartItems.length > 0 
        ? 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(255,255,255,1)"/></svg> 
        :
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(255,255,255,1)"/></svg>
    
    return (
        <header>
            {/* We want 2 links - 1 to Home Page (page with all the pictures) and 1 to Cart Page */}
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                {cartDisplay}
            </Link>
        </header>
    )
}

export default Header

