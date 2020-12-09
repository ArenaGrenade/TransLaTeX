import { Row, Col } from "reactstrap";
import PlaintextField from "./PlaintextField";
import LaTeXField from "./LaTeXField";

const MainContainer = () => {
    return (
        <Row className="p-4">
            <Col md className="my-2">
                <PlaintextField />
            </Col>
            <Col className="my-2">
                <LaTeXField />
            </Col>
        </Row>
    );
};

export default MainContainer;
