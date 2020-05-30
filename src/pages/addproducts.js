import React from "react";
import { Navbar, InputUpload, InputField } from "../components/index"
import { MDBCard, MDBContainer } from "mdbreact";
const AddProduct = () => {
    const cardStyle = {
        padding: '20px'
    }
    return (
        <React.Fragment >
            <Navbar title="Yummi Pizza" />
            <div class="container">
                <MDBContainer style={cardStyle}>
                    <MDBCard>
                        <InputField label="Title" />
                        <InputField label="Description" />
                        <InputField label="Amount" />
                        <InputField label="Availability" />
                        <InputUpload />
                    </MDBCard>
                </MDBContainer>
            </div>
        </React.Fragment>
    );
};

export default AddProduct;