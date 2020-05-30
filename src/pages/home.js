import React, { useEffect, useState } from "react";
import { Navbar, Card } from "../components/index"
import { MDBRow } from "mdbreact";
import axios from 'axios';
import { URI } from "../constants/url";
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`${URI}products`).then(res => {
            const products = res.data;
            setProducts(products);
        })
    }, []);
    return (
        <React.Fragment >
            <Navbar title="Yummi Pizza" />
            <div class="container">
                <MDBRow>
                    {
                        products ? products.map((product, index) =>
                            <Card key={index} title={product.title} image={product.product_image} price={product.price} description={product.description}
                            />
                        ) : null
                    }

                </MDBRow>
            </div>
        </React.Fragment>
    );
};

export default Home;