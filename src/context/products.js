import React, { useState } from "react";
export const Context = React.createContext(null);
const Provider = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <Context.Provider value={[cart, setCart]}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
