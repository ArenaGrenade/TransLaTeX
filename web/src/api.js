const HOST = process.env.HOST || "/api";

export const translate = async (plaintext, alert) => {
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
        var text = await fetch(`${HOST}/completions`, requestOptions);
        
        // Parse the remaining time to print in the alert
        var remaining = Number(text.headers.get('x-ratelimit-remaining'));

        if (remaining === 0) {
            alert.show("You have exceeded the rate limit. Please try later.");
        }
        return text.json();
    } catch (err) {
        return err.response;
    }
};
