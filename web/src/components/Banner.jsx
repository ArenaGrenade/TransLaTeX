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
                    Powered by
                    <img src="/openai.svg" className="poweredby-img mx-2" alt="OpenAI" />·
                    <a href="https://github.com/ArenaGrenade/TransLaTeX">
                        <img src="/github.svg" className="mb-1 github-img" alt="GitHub" />
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
