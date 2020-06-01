import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
const Card = (props) => {
    const [title] = useState(props.title);
    const [description] = useState(props.description);
    const [price] = useState(props.price);
    const [image] = useState(props.image);
    const [clicking] = useState(props.clicking);
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

                    <MDBBtn color='unique' onClick={clicking}>Add to Cart</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
export default (Card);