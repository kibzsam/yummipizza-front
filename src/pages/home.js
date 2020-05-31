import React, { useEffect, useState, useContext } from "react";
import { Navbar } from "../components/index"
import { MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import axios from 'axios';
import { URI } from "../constants/url";
import { Context as productContext } from "../context/products";
const Home = () => {
    const [products, setProducts] = useState([]);

    //Context
    const [cart, setCart] = useContext(productContext);
    useEffect(() => {
        axios.get(`${URI}products`).then(res => {
            const products = res.data;
            setProducts(products);
        }).catch(error=>console.log(error))
    }, []);

    return (
        <React.Fragment >
            <Navbar title="Yummi Pizza" count={cart.length} />
            <div class="container">
                <MDBRow>
                    {
                        products ? products.map((product, index) =>
                            // <Card key={index} title={product.title} image={product.product_image} price={product.price} description={product.description}
                            //     click={
                            //         () =>
                            //             setCart(current => [...current, {
                            //                 image: product.product_image,
                            //                 price: product.price,
                            //                 description: product.description,
                            //                 title: product.title
                            //             }])

                            //     }
                            // />

                            < MDBCol md='4' >
                                <MDBCard narrow>
                                    <MDBView cascade>
                                        <MDBCardImage
                                            hover
                                            overlay='white-slight'
                                            className='card-img-top'
                                            src={product.product_image}
                                            alt='food'
                                        />
                                    </MDBView>

                                    <MDBCardBody>
                                        <h5 className='pink-text'>
                                            <MDBIcon icon='utensils' /> {product.title}
                                        </h5>

                                        <MDBCardTitle className='font-weight-bold'>
                                            {product.price}
                                        </MDBCardTitle>

                                        <MDBCardText>
                                            {product.description}
                                        </MDBCardText>

                                        <MDBBtn color='unique' onClick={() => {
                                            setCart(current => [...current, {
                                                image: product.product_image,
                                                price: product.price,
                                                description: product.description,
                                                title: product.title
                                            }])
                                        }
                                        }>Order</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ) : null
                    }

                </MDBRow>
            </div>
        </React.Fragment >
    );
};

export default Home;