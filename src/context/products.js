import React, { useState } from "react";
export const Context = React.createContext(null);
const Provider = props => {
    const [state, setState] = useState(null);
    return (
        <Context.Provider value={{ ...state, set: setState }}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
