import React, { useContext } from "react";
import { Navbar, Card } from "../components/index"
import { MDBRow } from 'mdbreact';
import { Context as productContext } from "../context/products";
const Home = () => {
    //Context
    const { products, cartData } = useContext(productContext);
    return (
        <React.Fragment >
            <Navbar title="Yummi Pizza" count={cartData.length} />
            <div class="container">
                <MDBRow>
                    {
                        products ? products.map((product, index) => (
                            <Card key={index} id={product.id} title={product.title} description={product.description} image={product.product_image}
                                price={product.price}
                            />)
                        ) : null
                    }

                </MDBRow>
            </div>
        </React.Fragment >
    );
};

export default Home;