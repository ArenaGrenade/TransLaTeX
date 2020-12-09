import { Card, CardBody, Input } from "reactstrap";

const PlaintextField = () => {
    return (
        <Card className="shadow p-2 p-md-3 textfield-container">
            <CardBody>
                <Input
                    type="textarea"
                    className="textfield-input"
                    placeholder="Type something in plain text..."
                    // TODO: better placeholder, possibly an example
                />
            </CardBody>
        </Card>
    );
};

export default PlaintextField;
