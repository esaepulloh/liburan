import { Container, Row, Col, Image } from "react-bootstrap"
import bgkrImage from "../assets/DUFAN/KORA-KORA/bgkr.JPG"
import krsatuImage from "../assets/DUFAN/KORA-KORA/kr1.JPG"
import krduaImage from "../assets/DUFAN/KORA-KORA/kr2.JPG"

const KoraKora = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center d-flex justify-content-center align-items-center" id="korakora">WAHANA KORA-KORA</h1>
                <br />
                <Row>
                    <Col md={4} >
                        <Image src={bgkrImage} className="Image"/>
                    </Col>
                    <Col md={4} >
                        <Image src={krsatuImage} className="Image"/>
                    </Col>
                    <Col md={4} >
                        <Image src={krduaImage} className="Image"/>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default KoraKora