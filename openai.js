const HOST = "curie";

module.exports = {
    translate: async (plaintext) => {
        const examples =
            "What follows are conversions from descriptions of equations to their equivalent in LaTeX.\n###\nIntegrate sin of x with limits from 0 to pi / 2 with respect to x $$$ \\int_{0}^{\\pi / 2} x dx\nIntegrate without limits the function x with respect to x $$$ \\int x dx\nEquate the exponential of inverse tangent of x to 20 $$$ e^{arctan(x)} = 20\nFind the differential of sin of y with respect to y $$$ \\frac{d}{dy} \\sin(y)\nFind the partial derivative of 2xy with respect to y $$$ \\frac{\\partial}{\\partial y} (2xy)\nFind the partial derivative of log of xy with respect to x $$$ \\frac{\\partial}{\\partial x} \\log(xy)\nIntegrate twice without limits the function sin of x multiplied by log of y with respect to x and y $$$ \\int \\sin(x) \\log(y) \\, dx \\, dy\n";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + process.env.TOKEN,
            },
            body: JSON.stringify({
                prompt: examples + plaintext + " $$$",
                max_tokens: 60,
                temperature: 0.1,
                n: 5,
                stop: "\n",
            }),
        };

        const res = await fetch(`https://api.openai.com/v1/engines/${HOST}/completions`, requestOptions);
        var json = await res.json();

        if (!res.ok) json = {"reason": "OpenAI Error. Try Again!"};
        else json = {"latex": json.choices[0].text};

        return new Promise(resolve => {
            resolve(json);
        });
    },
};
