import { Container, Row, Col, Image } from "react-bootstrap"
import arduaImage from "../assets/DUFAN/ARUNG JERAM/ar2.JPG"
import artigaImage from "../assets/DUFAN/ARUNG JERAM/ar3.JPG"
import arempatImage from "../assets/DUFAN/ARUNG JERAM/ar4.JPG"
import arlimaImage from "../assets/DUFAN/ARUNG JERAM/ar5.JPG"

const ArungJeram = () => {
    return (
        <div className="subsub">
            <Container>
                <br />
                <h1 className="text-white text-center d-flex justify-content-center align-items-center" id="arungjeram">WAHANA ARUNG JERAM</h1>
                <br />
                <Row>
                    <Col md={6} >
                        <Image src={arduaImage} className="liburanImage"/>
                    </Col>
                    <Col md={6} >
                        <Image src={artigaImage} className="liburanImage"/>
                    </Col>
                    <Col md={6} >
                        <Image src={arempatImage} className="liburanImage"/>
                    </Col>
                    <Col md={6} >
                        <Image src={arlimaImage} className="liburanImage"/>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default ArungJeram