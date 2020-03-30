import React, {useState, useEffect} from "react"

// Creating Context
const Context = React.createContext()

// Function where all the logic is set up
function ContextProvider({children}) { // or if we dont use destructuring: props

    // We want 2 states -  for 1) all photos and 2) cart items
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    // API - we get all the pictures from this API
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        // Getting the data from API & Saving data to state
        fetch(url) // we fetch api
            .then(res => res.json()) // parse it as JSON
            .then(data => setAllPhotos(data)) // and store all data in allPhotos array
    }, []) // we only want to fetch API once, so the second parameter is empty array - []

    // Function for toggling Favorite icon
    function toggleFavorite(id) {
        const updatedArray = allPhotos.map(photo => { // we map through allPhotos array and
            if(photo.id === id) { // if id of photos mathes id in this function's parameter
                // console.log(photo.id, !photo.isFavorite)
                return { // we return new object with
                    ...photo, // all of the properties and values of the photo (these stay the same),
                    isFavorite: !photo.isFavorite // and changed value for property "isFavorite" (this property's value is now flipped)
                }
            }
            return photo // we need to return photo
        })

        setAllPhotos(updatedArray) // we update the allPhotos array with state hook 
    }

    // Function for adding items to cart
    function addToCart(newItem) { // we want to add the whole img, that' why "newItem" is an array // in the beginning it's empty
        setCartItems(prevItems => [...prevItems, newItem]) // we need to know the previous items in the cart, because we dont want to delete them, therefore this newItem array has all the previous items plus new item
    }
    // console.log(cartItems)

    // Function for removing items from cart
    function removeFromCart(id) { // we need to know the id of the item
        setCartItems(prevItems => prevItems.filter(item => item.id !== id)) // every item gets added to new array except the one with the specified id - this one gets "deleted" // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    }

    // Function for setting empty cart to empty - we need this after "Checkout"
    function emptyCart() {
        setCartItems([])
    }

    return (
        // !!! Anything we want to get from Context to different Components, needs to happen through value properties !!! //
        <Context.Provider value={{
            allPhotos: allPhotos, 
            toggleFavorite, 
            addToCart, 
            cartItems, 
            removeFromCart, 
            emptyCart}}>
            {/* {props.children} */}
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} // we need to export ContextProvider function and Context itself