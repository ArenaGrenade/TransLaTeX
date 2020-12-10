import { useState } from "react";
import { Row, Col } from "reactstrap";

import PlaintextField from "./PlaintextField";
import LaTeXField from "./LaTeXField";

const MainContainer = () => {
    const [state, setState] = useState({
        plaintext: "Integral of f with respect to x in range 2 to 3 is 5.",
        latex: "\\int\\limits_{2}^{3}f dx = 5",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleTranslate = () => {
        const examples = "What follows are conversions from descriptions of equations to their equivalent in LaTeX.\n###\n\nIntegrate sin of x with limits from 0 to pi / 2 with respect to x\n\\int_{0}^{\\pi / 2} x dx\n\nIntegrate without limits the function x with respect to x\n\\int x dx\n\nEquate the exponential of inverse tangent of x to 20\ne^{arctan(x)} = 20\n\nFind the differential of sin of y with respect to y\n\\frac{d}{dy} \\sin(y)\n\nFind the partial derivative of 2xy with respect to y\n\\frac{\\partial}{\\partial y} (2xy)\n\nFind the partial derivative of log of xy with respect to x\n\\frac{\\partial}{\\partial x} \\log(xy)\n\nIntegrate twice without limits the function sin of x multiplied by log of y with respect to x and y\n\\int \\sin(x) \\log(y) \\, dx \\, dy\n\n";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                "prompt": examples + state.plaintext + "\n",
                "max_tokens": 60,
                "temperature": 0.1,
                "n": 5,
                "stop": "\n",
            }),
        };

        fetch("https://api.openai.com/v1/engines/curie/completions", requestOptions)
            .then(response => response.json())
            .then(data => setState({...state, latex: data.choices[0].text}));
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

export default MainContainer;
