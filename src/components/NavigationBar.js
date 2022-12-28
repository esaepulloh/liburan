import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="/">LIBURAN DUFAN</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#niagara">NIAGARA</Nav.Link>
                        <Nav.Link href="#korakora">KORA-KORA</Nav.Link>
                        <Nav.Link href="#arungjeram">ARUNG JERAM</Nav.Link>
                        <Nav.Link href="#hysteria">HYSTERIA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar