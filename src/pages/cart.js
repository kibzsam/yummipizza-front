import React, { useState, useContext, useEffect, useCallback } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import { Navbar } from "../components/index";
import { Context as productContext } from "../context/products";
const Cart = () => {
    const [cart] = useContext(productContext);
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        setData(cart)
    }, [cart])
    const calculateAmount = useCallback(() => {
        const amount = quantity * price;
        setAmount(amount);
    }, [quantity, price]);
    const onChange = (e) => {
        setQuantity(e.target.value);
        calculateAmount();
    }
    const [columns] = useState(
        [
            {
                label: '',
                field: 'img',
            },
            {
                label: <strong>Product</strong>,
                field: 'product'
            },
            {
                label: <strong>Price</strong>,
                field: 'price'
            },
            {
                label: <strong>QTY</strong>,
                field: 'qty'
            },
            {
                label: <strong>Amount</strong>,
                field: 'qty'
            },
            {
                label: '',
                field: 'button'
            }
        ]
    )

    const rows = [];
    data.map(row => {
        return rows.push(
            {
                'img': <img src={row.image} alt="" className="img-fluid z-depth-0" />,
                'product': [<h5 className="mt-2" key={new Date().getDate + 1}><strong>{row.title}</strong></h5>, <p key={new
                    Date().getDate} className="text-muted">{row.subTitle}</p>],
                'price': `${row.price}`,
                'qty':
                    <React.Fragment>
                        <MDBInput type="number" default={quantity} className="form-control" style={{ width: "100px" }} onChange={onChange} /><span>{setPrice(row.price)}</span></React.Fragment>,
                'amount': <strong>{amount}</strong>,
                'button':
                    <MDBTooltip placement="top">
                        <MDBBtn color="unique" size="md">
                            X
              </MDBBtn>
                        <div>Remove item</div>
                    </MDBTooltip>
            }
        )

    });
    return (
        <React.Fragment>
            <Navbar title="Shopping Cart" count={cart.length} />
            <div class="container">
                <MDBRow className="my-3" center>
                    <MDBCard className="w-100">
                        <MDBCardBody>
                            <MDBTable className="product-table">
                                <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
                                <MDBTableBody rows={rows} />
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </div>
        </React.Fragment >
    );

}

export default Cart;