const axios = require('axios');

const requestBody = {
    data: {
        type: "file",
        attributes: {
            payload: {}
        },
        relationships: {
            "initial-account": {
                data: {
                    type: "account",
                    id: "b658daae-6d9b-48d7-9ac5-32bf978d7a03"
                }
            },
            "file-type": {
                data: {
                    id: "1a3c1e04-ab62-4c44-b4a3-873f5d50c07d"
                }
            }
        }
    }
};

const createFile = (payload, owner, fileType) => {
    let body = requestBody;
    body['data']['attributes']['payload'] = payload;
    body['data']['relationships']['initial-account']['data']['id'] = owner;
    body['data']['relationships']['file-type']['data']['id'] = fileType;

    return axios.post("https://api.todaqfinance.net/files", body, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': '65ceb7cd-4fcc-4bd0-bb06-62d1e60052d1',
        }
    })
    .then(res => res.data.data)
    .catch(error => console.log(error))};

module.exports = createFile;
