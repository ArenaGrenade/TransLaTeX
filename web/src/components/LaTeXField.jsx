import { Card, CardBody, Input } from "reactstrap";

const LaTeXField = ({ value, onChange }) => {
    return (
        <Card className="shadow p-2 p-md-3 textfield-container">
            <CardBody>
                <Input
                    name="latex"
                    type="textarea"
                    className="textfield-input"
                    placeholder="Type something in LaTeX..."
                    value={value}
                    onChange={onChange}
                    // TODO: better placeholder, possibly an example
                />
            </CardBody>
        </Card>
    );
};

export default LaTeXField;
