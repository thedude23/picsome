import React, {useContext, useState} from "react"
import {Context} from "../../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")

    // Function for when user clicks on button (button "Place Order" -> button "Ordering" (for 3s) -> button hides)
    function placeOrder() {
        setButtonText("Ordering...")

        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart() // empty the cart
        }, 3000)
    }

    const {cartItems, emptyCart} = useContext(Context)
    // console.log(cartItems)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "EUR"})

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart