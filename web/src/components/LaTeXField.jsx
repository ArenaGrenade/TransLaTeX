import { useState } from "react";
import { Button, Card, CardBody, CardFooter, Input } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Latex from "react-latex-next";

const LaTeXField = ({ value, onChange }) => {
    const [codeView, setCodeView] = useState(false);
    const [copied, setCopied] = useState(false);

    return (
        <Card className={`shadow-sm textfield-container${codeView ? "-dark" : ""}`}>
            {value ? (
                <Button
                    color={codeView ? "light" : "dark"}
                    className="code-toggle"
                    onClick={() => setCodeView(!codeView)}
                >
                    {`VIEW ${codeView ? "LATEX" : "CODE"}`}
                </Button>
            ) : null}
            <CardBody className="p-3 p-md-4">
                {codeView ? (
                    <Input
                        name="latex"
                        type="textarea"
                        className="textfield-input-dark"
                        placeholder="Type some LaTeX..."
                        value={value}
                        onChange={onChange}
                        // TODO: better placeholder, possibly an example
                    />
                ) : (
                    <Latex>{`$$ ${value} $$`}</Latex>
                )}
            </CardBody>
            <CardFooter className="px-3 d-flex justify-content-end">
                <Button color="danger" className="mr-2" disabled={value === ""}>
                    DOWNLOAD .TEX
                </Button>
                <CopyToClipboard
                    text={value}
                    onCopy={() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 5000);
                    }}
                >
                    <Button color="primary" disabled={value === ""}>
                        {copied ? "COPIED!" : "COPY CODE"}
                    </Button>
                </CopyToClipboard>
            </CardFooter>
        </Card>
    );
};

export default LaTeXField;
