import { Container } from "reactstrap";

const Banner = () => {
    return (
        <Container
            fluid
            className="text-center mt-5 pt-3 mb-4 d-flex flex-column justify-content-center align-items-center"
        >
            <div>
                <img src="/banner.svg" className="banner-img" alt="TransLaTeX" />
                <div className="poweredby-text text-right">
                    <a href="https://beta.openai.com/" target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn.openai.com/API/logo-assets/powered-by-openai.svg"
                            width="150"
                            alt="Powered by OpenAI"
                            className="mr-2"
                        />
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
