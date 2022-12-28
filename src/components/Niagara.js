import { Container, Row, Col, Image } from "react-bootstrap"
import satuImage from "../assets/DUFAN/NIAGARA/SATU.JPG"
import duaImage from "../assets/DUFAN/NIAGARA/DUA.JPG"
import tigaImage from "../assets/DUFAN/NIAGARA/TIGA.JPG"
import limaImage from "../assets/DUFAN/NIAGARA/lima.JPG"

const Niagara = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center d-flex justify-content-center align-items-center" id="niagara">WAHANA NIAGARA</h1>
                <br />
                <Row>
                    <Col md={6} id="foto">
                        <Image src={satuImage} className="liburanImage"/>
                    </Col>
                    <Col md={6} >
                        <Image src={duaImage} className="liburanImage"/>
                    </Col>
                    <Col md={6} >
                        <Image src={tigaImage} className="liburanImage"/>
                    </Col>
                    <Col md={6}>
                        <Image src={limaImage} className="liburanImage"/>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default Niagara