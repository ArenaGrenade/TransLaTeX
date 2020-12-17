const HOST = process.env.HOST || "/api";

export const translate = async (plaintext) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            plaintext: plaintext,
        }),
    };

    try {
        var text = (await fetch(`${HOST}/completions`, requestOptions)).json();
        console.log(text);
        return text;
    } catch (err) {
        return err.response;
    }
};
