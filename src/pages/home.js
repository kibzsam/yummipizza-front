import React, { useContext } from "react";
import { Navbar, Card } from "../components/index"
import { MDBRow } from 'mdbreact';
import { Context as productContext } from "../context/products";
const Home = () => {
    //Context
    const { cartData, products, setCartData } = useContext(productContext);
    return (
        <React.Fragment >
            <Navbar title="Yummi Pizza" count={cartData.length} />
            <div class="container">
                <MDBRow>
                    {
                        products ? products.map((product, index) => (
                            <Card key={index} title={product.title} description={product.description} image={product.product_image}
                                price={product.price}
                                clicking={() =>
                                    setCartData([{
                                        image: product.product_image,
                                        price: product.price,
                                        description: product.description,
                                        title: product.title
                                    }])
                                }
                            />)
                        ) : null
                    }

                </MDBRow>
            </div>
        </React.Fragment >
    );
};

export default Home;