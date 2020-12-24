import { useState } from "react";
import { Row, Col } from "reactstrap";
import { withAlert } from 'react-alert';

import { translate } from "../api";

import PlaintextField from "./PlaintextField";
import LaTeXField from "./LaTeXField";

const MainContainer = ({ alert }) => {
    const [state, setState] = useState({
        plaintext: "Integration of x in the range 2 to 3",
        latex: "\\int\\limits_{2}^{3}x dx",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleTranslate = async () => {
        const res = await translate(state.plaintext, alert);
        setState({ ...state, latex: res });
    };

    return (
        <Row className="p-2 p-md-4">
            <Col md className="my-2">
                <PlaintextField
                    value={state.plaintext}
                    onChange={handleChange}
                    onTranslate={handleTranslate}
                />
            </Col>
            <Col md className="my-2">
                <LaTeXField value={state.latex} onChange={handleChange} />
            </Col>
        </Row>
    );
};

export default withAlert()(MainContainer);
