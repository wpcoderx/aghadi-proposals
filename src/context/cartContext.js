/* global state container */
'use client'
import { createContext,useContext,useEffect,useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    // Load from localStorage
    useEffect(()=>{
        const getFromcart = localStorage.getItem('cart');
        if(getFromcart){
            try {
                setCartItems(JSON.parse(getFromcart));
            } catch (err) {
                console.error('Failed to parse cart from localStorage', err);
            }
        }
    },[]);


    /* Save product to localStorage */
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cartItems));
    },[cartItems]);

    const addToCart = (product) =>{

        console.log("Prodct added to cart...",product);

        setCartItems( prev=> {
            const alreadyInCart = prev.some(item => item.id === product.id);
            
            if (alreadyInCart) {
                console.log("Product already in cart:", product.title);
                return prev; // return unchanged cart
            }

            console.log("Product added to cart:", product.title);
            return [...prev, product];

        });

        //setCartItems(prev=>[...prev,product]);
    } 

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);