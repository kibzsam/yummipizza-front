import React from "react";
import { Navbar, Card } from "../components/index"
const Home = () => {
    return (
        <React.Fragment >
            <Navbar title="Yummi Pizza" />
            <div class="container">
                <Card />
            </div>
        </React.Fragment>
    );
};

export default Home;