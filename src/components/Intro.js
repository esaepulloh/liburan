import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
    return(
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                 <Col>
                    <div className="title">KOS BU NENI</div>
                    <div className="title">LIBURAN KE DUFAN</div>
                    <div className="introButton mt-4 text-center">
                        <Button variant="dark" href="#foto">Lihat Semua Foto</Button>
                    </div>
                 </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro