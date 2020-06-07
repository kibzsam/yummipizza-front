import React, { useContext} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import { Context as cartContext } from "../context/products";
const Card = (props) => {
    const { title, description, price, image, id } = props
    const { addItemToCart } = useContext(cartContext)
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

                    <MDBBtn color='unique' onClick={() => addItemToCart({
                        id: id,
                        image: image,
                        price: price,
                        description: description,
                        title: title
                    })}>Add to Cart</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
export default (Card);