import { Button, Card, CardBody, CardFooter, Input } from "reactstrap";

const PlaintextField = ({ value, onChange }) => {
    return (
        <Card className="shadow-sm textfield-container">
            <CardBody className="p-3 p-md-4">
                <Input
                    name="plaintext"
                    type="textarea"
                    className="textfield-input"
                    placeholder="Type some plain text..."
                    value={value}
                    onChange={onChange}
                    // TODO: better placeholder, possibly an example
                />
            </CardBody>
            <CardFooter className="px-3 d-flex justify-content-end">
                <Button color="success" disabled={value === ""}>
                    TRANSLATE
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PlaintextField;
