import { Container, Row, Col, Image } from "react-bootstrap"
import hyssatuImage from "../assets/DUFAN/HISTERIA/hysteria3.JPG"
import hysduaImage from "../assets/DUFAN/HISTERIA/hysteria3.JPG"
import hystigaImage from "../assets/DUFAN/HISTERIA/hysteria3.JPG"

const KoraKora = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center d-flex justify-content-center align-items-center" id="hysteria">WAHANA HYSTERIA</h1>
                <br />
                <Row>
                    <Col md={4} >
                        <Image src={hyssatuImage} className="Image"/>
                    </Col>
                    <Col md={4} >
                        <Image src={hysduaImage} className="Image"/>
                    </Col>
                    <Col md={4} >
                        <Image src={hystigaImage} className="Image"/>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default KoraKora