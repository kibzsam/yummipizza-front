import React, { useState, useEffect } from "react";
import axios from 'axios';
import { URI } from "../constants/url";
export const Context = React.createContext(null);
const Provider = (props) => {
    const [products, setProducts] = useState([]);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        axios.get(`${URI}api/products`).then(res => {
            const products = res.data;
            setProducts(products);
        }).catch(error => console.log(error))
    }, []);
    const addItemToCart = (item) => {
        setCartData([...cartData, item])
    }
    // check if item is in cart and add quantity
    const itemsWithQuantity = (items) => {
        return items.reduce((acc, item) => {
            const itemFound = acc.find(_item => _item.id === item.id)
            if (itemFound) {
                itemFound.quantity = itemFound.quantity + 1
            } else {
                acc.push({
                    quantity: 1,
                    ...item
                })
            }
            return acc;
        }, [])
    }
    return (
        <Context.Provider value={{ cartData: itemsWithQuantity(cartData), products, setCartData, addItemToCart }}>
            {props.children}
        </Context.Provider >
    );
};

export default Provider;
