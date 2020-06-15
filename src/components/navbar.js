import React, { useState } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse
} from "mdbreact";
const Navbar = (props) => {
    const navStyle = {
        marginBottom: '30px'
    }
    const [open, setOpen] = useState({
        open: false,
    });
    const [title] = useState(props.title);
    const [count] = useState(props.count)
    const toggleCollapse = () => {
        setOpen({ open: !open });
    };

    return (

        <MDBNavbar color="default-color" dark expand="md" style={navStyle}>
            <MDBNavbarBrand>
                <strong className="white-text">{title}</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
                <MDBNavbarNav right>
                    <MDBNavItem active>
                        <MDBNavLink to="/cart">
                            VIEW CART<i class="fas fa-shopping-cart"><span>{count}</span></i>
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>

    );
};

export default Navbar;
