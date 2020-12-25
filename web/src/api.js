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
        var res = await fetch(`${HOST}/completions`, requestOptions);
        var json = await res.json();
        if (json.reason) throw json;
        
        // Parse the remaining time to print in the alert
        var remaining = Number(res.headers.get('x-ratelimit-remaining'));
        if (remaining === 0) alert.show("You have exceeded the rate limit. Please try later.", {type: 'info'});

        return json.latex;
    } catch (err) {
        alert.show("An error has occured!", {type: 'error'});
        return err.reason;
    }
};
