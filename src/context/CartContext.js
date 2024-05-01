import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../data/Product";


const CartContext = createContext();

const getDefaultCart = () => {
    let cart = {};

    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }

    return cart;
}


//to create a provider function
const AppProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(getDefaultCart());
    const [searchText, setSearchText] = useState('')


    const addToCart = (itemId) => {

        setCartCount((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }

    const removeFromCart = (itemId) => {
        setCartCount((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const filteredGames = PRODUCTS.filter(filGames =>{
        if(searchText!==''){
            return filGames.name.toLowerCase().includes(searchText.toLowerCase())
        }
        else{
            return filGames;
        }
    })





    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, cartCount, searchText, setSearchText, filteredGames }}>
            {children}
        </CartContext.Provider>
    )

}

const useGlobalContext = () => {
    return useContext(CartContext);
}


export { CartContext, AppProvider, useGlobalContext }