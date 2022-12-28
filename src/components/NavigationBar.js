import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div className="subtitle">
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand className="text-dark" href="/">DUFAN</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="tex-muted" href="#niagara">NIAGARA</Nav.Link>
                        <Nav.Link className="text-muted" href="#korakora">KORA-KORA</Nav.Link>
                        <Nav.Link className="text-muted" href="#arungjeram">ARUNG JERAM</Nav.Link>
                        <Nav.Link className="text-muted" href="#hysteria">HYSTERIA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar