import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const BarraNavegacion = () => {
    //<Nav.Link href="/">Home</Nav.Link>
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Pokedex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="/">Home</NavLink>
                        <Nav.Link href="/Aplication">Aplication</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
