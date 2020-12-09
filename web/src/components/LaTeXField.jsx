import { Card, CardBody, Input } from "reactstrap";

const LaTeXField = () => {
    return (
        <Card className="shadow p-2 p-md-3 textfield-container">
            <CardBody>
                <Input
                    type="textarea"
                    className="textfield-input"
                    placeholder="Type something in LaTeX..."
                    // TODO: better placeholder, possibly an example
                />
            </CardBody>
        </Card>
    );
};

export default LaTeXField;
