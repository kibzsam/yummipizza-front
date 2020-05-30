import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const Card = (props) => {
    const [title] = useState(props.title);
    const [description] = useState(props.description);
    const [price] = useState(props.price);
    const [image] = useState(props.image);
    return (

        <MDBCol md='4'>
            <MDBCard narrow>
                <MDBView cascade>
                    <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src={image}
                        alt='food'
                    />
                </MDBView>

                <MDBCardBody>
                    <h5 className='pink-text'>
                        <MDBIcon icon='utensils' /> {title}
                    </h5>

                    <MDBCardTitle className='font-weight-bold'>
                        {price}
                    </MDBCardTitle>

                    <MDBCardText>
                        {description}
                    </MDBCardText>

                    <OrderButton />
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
export const OrderButton = () => {
    return (
        <MDBBtn color='unique'>Order</MDBBtn>
    )
}

export default Card;