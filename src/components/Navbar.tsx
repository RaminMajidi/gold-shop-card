import { Container,Button ,Nav, Navbar as NavbarBs } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useCartContext } from "../context/CartContext"



function Navbar (){

    const {cartQty,openCart,closeCart} = useCartContext()
    return (
        <NavbarBs className="bg-warning text-dark mb-3 ">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} className="text-dark">Home</Nav.Link>
                    <Nav.Link to="/about" as={NavLink} className="text-dark">About</Nav.Link>
                    <Nav.Link to="/shop" as={NavLink} className="text-dark">Shop</Nav.Link>
                </Nav>
                <Button onClick={openCart} variant="outline-dark" className="btn-dark" style={{width:"2.5rem" , height:"2.5rem" , position:"relative" , fontSize:"1rem"}}>
                    <i className="bi bi-cart text-warning"></i>
                    <div className="rounded-circle bg-info d-flex justify-content-center align-items-center"
                    style={{
                        color:"white",
                        width:"1.1rem",
                        height:"1.1rem",
                        position:"absolute",
                        fontSize:"1rem",
                        bottom:0,
                        right:0,
                        transform:"tarnslate(25%,25%)"
                    }}>{cartQty}</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar