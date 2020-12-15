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
        return await fetch(`${HOST}/completions`, requestOptions);
    } catch (err) {
        return err.response;
    }
};
