import { Container } from "reactstrap";

const Banner = () => {
    return (
        <Container
            fluid
            className="text-center banner-container d-flex flex-column justify-content-center align-items-center"
        >
            <img src="/banner.svg" className="banner-img" alt="TransLaTeX" />
            <span classname="repo-link">Hello there! Please visit us on <a href="https://github.com/ArenaGrenade/TransLaTeX">github</a>!</span>
        </Container>
    );
};

export default Banner;
