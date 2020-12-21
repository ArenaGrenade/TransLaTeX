import { Container } from "reactstrap";

const Banner = () => {
    return (
        <Container
            fluid
            className="text-center banner-container d-flex justify-content-center align-items-center"
        >
            <img src="/banner.svg" className="banner-img" alt="TransLaTeX" />
        </Container>
    );
};

export default Banner;
