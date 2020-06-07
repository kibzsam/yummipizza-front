import React, { useContext } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Context as productContext } from "../context/products";
const CartPanel = (props) => {
    const { cartData, setCartData } = useContext(productContext);
    const { name, pic, desc, prices, id, quantity } = props;
    const remove = () => {
        const newCartData = cartData.filter(item => item.id !== id)
        setCartData(newCartData);
    }
    return (
        <MDBRow>
            <MDBCol md="3"><img src={pic} style={{ width: '10rems', height: '8rem' }} alt="pizza" /></MDBCol>
            <MDBCol md="4">
                <h4><strong>{name}</strong></h4>
                <p><h5><strong>{prices}</strong></h5></p>
                <p><h5>{desc}</h5></p>
            </MDBCol>

            <MDBCol md="3">
                <h5><strong>Quantity</strong></h5>
                <h6><strong>{quantity}</strong></h6>
            </MDBCol>
            <MDBCol md="2">
                <MDBBtn color="danger" size="sm" onClick={remove}>X</MDBBtn>
            </MDBCol>
        </MDBRow>
    );
}

export default CartPanel;