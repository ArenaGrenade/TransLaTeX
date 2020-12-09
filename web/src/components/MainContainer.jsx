import { useState } from "react";
import { Row, Col } from "reactstrap";

import PlaintextField from "./PlaintextField";
import LaTeXField from "./LaTeXField";

const MainContainer = () => {
    const [state, setState] = useState({
        plaintext: "",
        latex: "",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return (
        <Row className="p-2 p-md-4">
            <Col md className="my-2">
                <PlaintextField value={state.plaintext} onChange={handleChange} />
            </Col>
            <Col md className="my-2">
                <LaTeXField value={state.latex} onChange={handleChange} />
            </Col>
        </Row>
    );
};

export default MainContainer;
