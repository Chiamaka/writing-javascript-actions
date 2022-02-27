const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadkoke.com/",
    headers: {
        Accept: "application/json"
        "User-Agent": "Writing Javascript action Githun Learning Lab course."
    },
    json: true
}

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;