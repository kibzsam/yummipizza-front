import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
const CartPanel = (props) => {
    const [name] = useState(props.name);
    const [pic] = useState(props.pic);
    const [desc] = useState(props.desc);
    const [prices] = useState(props.prices);
    const [remove] = useState(props.remove)
    return (
        <MDBRow>
            <MDBCol md="3"><img src={pic} style={{ width: '10rems', height: '8rem' }} alt="pizza" /></MDBCol>
            <MDBCol md="5">
                <h3><strong>{name}</strong></h3>
                <p><h5><strong>{prices}</strong></h5></p>
                <p><h5>{desc}</h5></p>
            </MDBCol>
            <MDBCol md="4">
                <MDBBtn color="danger" onClick={remove}>X</MDBBtn>
            </MDBCol>
        </MDBRow>
    );
}

export default CartPanel;