import React, { useState, useEffect } from "react";
import axios from 'axios';
import { URI } from "../constants/url";
export const Context = React.createContext(null);
const Provider = (props) => {
    const [products, setProducts] = useState([]);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        axios.get(`${URI}products`).then(res => {
            const products = res.data;
            setProducts(products);
        }).catch(error => console.log(error))
    }, []);
    return (
        <Context.Provider value={{ cartData, products, setCartData }}>
            {props.children}
        </Context.Provider >
    );
};

export default Provider;
