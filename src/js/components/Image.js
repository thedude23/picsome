import React, {useState, useContext} from "react"
import {Context} from "../../Context"
// import PropTypes from "prop-types"
// import useHover from "../hooks/useHover"


function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    // const [hovered, ref] = useHover()

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    // Function for Heart Icon - if it's favorited, we display filled heart, else (if it's hovered) empty cart
    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    } // const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i> // if hovered, we display heart icon; if clicked, we toggle isFavorite

    // Function for Cart Icon - if it's already in cart, we display filled cart icon, else (if it's hovered) + icon
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id) // function for "if it's already in cart" - function looks at every item and it will return true if any item in the array has the id equal to our current image's id // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 

        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
         } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    } // const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i> // if hovered, we display plus icon

    return (
        <div className={`${className} image-container`} // className refers to "getClass(i)" function in Photos.js, which is imported from utilities/getClass.js
             onMouseEnter={() => setHovered(true)} 
             onMouseLeave={() => setHovered(false)}
            // ref={ref}
        > 
            <img src={img.url} className="image-grid" /> {/* picture */}
            {heartIcon()} {/* heart icon */}
            {cartIcon()} {/* cart icon */}
        </div>
    )
}

// Prop Types
// Image.propTypes = {
//     className: PropTypes.string,
//     img: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//         isFavorite: PropTypes.bool
//     })
// }

export default Image
