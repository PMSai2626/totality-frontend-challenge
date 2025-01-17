
'use client';

import { createContext, useState, useContext } from "react";


const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingCart = prevCart.find((item) => item.id === product.id);
            if(existingCart){
                return prevCart.map((item) => 
                item.id === product.id
            ? {...item, quantity: item.quantity+1}
        : item
    )
            } else{
                return [...prevCart, {...product, quantity: 1}];
            }
        })
    };


    const updatedQuantity = (productId, quantity) => {
        setCart((prevCart) => 
            prevCart.map((item) => 
            item.id === productId ? {...item, quantity} : item
            )
        )
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId ));
    };

    const clearCart = () => {
    setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, updatedQuantity, clearCart,  removeFromCart}} >
            {children}

        </CartContext.Provider>

    )
};

export const useCart = () =>{
return useContext(CartContext)
} 
