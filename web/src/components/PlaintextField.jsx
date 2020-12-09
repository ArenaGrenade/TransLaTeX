import { Card, CardBody, Input } from "reactstrap";

const PlaintextField = ({ value, onChange }) => {
    return (
        <Card className="shadow p-2 p-md-3 textfield-container">
            <CardBody>
                <Input
                    name="plaintext"
                    type="textarea"
                    className="textfield-input"
                    placeholder="Type something in plain text..."
                    value={value}
                    onChange={onChange}
                    // TODO: better placeholder, possibly an example
                />
            </CardBody>
        </Card>
    );
};

export default PlaintextField;
