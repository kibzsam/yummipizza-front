import React, { useContext } from "react";
import { MDBRow, MDBCard } from "mdbreact";
import { Navbar, CartPanel } from "../components/index";
import { Context as productContext } from "../context/products";
const Cart = () => {
    const { cartData} = useContext(productContext);
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
                                    name={item.title}
                                    desc={item.description}
                                    pic={item.image}
                                    prices={item.price}
                                />

                            ) : null
                        }
                    </MDBCard>
                </MDBRow>
            </div>
        </React.Fragment >
    );

}

export default Cart;