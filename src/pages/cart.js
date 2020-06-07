import React, { useContext, useEffect, useState, useCallback } from "react";
import { MDBRow, MDBCard, MDBBtn, MDBCol } from "mdbreact";
import { Navbar, CartPanel } from "../components/index";
import { Context as productContext } from "../context/products";
const Cart = () => {
    const { cartData } = useContext(productContext);
    const [totalCartPrice, setTotalCartPrice] = useState();
    const formatPrice = (_price) => {
        let fprice = _price.replace('$', '')
        let price = parseFloat(fprice)
        return price
    }
    const totalPrice = useCallback((items) => {
        let ftotal = items.reduce((acc, item) => acc + item.quantity * formatPrice(item.price), 0.0)
        return setTotalCartPrice(ftotal)

    }, [])
    useEffect(() => {
        totalPrice(cartData)
    }, [cartData, totalPrice])
    return (
        <React.Fragment>
            <Navbar title="Shopping Cart" count={cartData.length} />
            <div class="container">
                <MDBRow className="my-3" center>
                    <MDBCard className="w-100" style={{ padding: '30px' }}>
                        {
                            cartData ? cartData.map((item, index) =>
                                <CartPanel
                                    key={index}
                                    id={item.id}
                                    quantity={item.quantity}
                                    name={item.title}
                                    desc={item.description}
                                    pic={item.image}
                                    prices={item.price}
                                />

                            ) : <MDBRow><MDBCol md="12"><h4>Your Cart is Empty</h4></MDBCol></MDBRow>
                        }
                    </MDBCard>
                    <MDBCard className="w-100" style={{ padding: '30px' }}>
                        <MDBRow>
                            <MDBCol md="7">
                                <h3><strong>Total Price</strong></h3>
                                <h5><strong><span>$</span>{totalCartPrice}</strong></h5>
                            </MDBCol>
                            <MDBCol md="5">
                                <MDBBtn color="success" size="lg">ORDER NOW</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBRow>
            </div>
        </React.Fragment >
    );

}

export default Cart;