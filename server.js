const express = require('express');
const axios = require('axios');

const app = express();

const BASE_URL = 'http://localhost:3000'; // Your app's url

app.get('/login', (req, res) => {

    if (req.query.ticket) {
        axios.get(`https://shib.idm.umd.edu/shibboleth-idp/profile/cas/serviceValidate?ticket=${req.query.ticket}&service=${BASE_URL}/login`)
            .then(response => {
                res.send(response.data); // Process directory id here
            })
            .catch(error => {
                res.send(error);
            });
    }
    else {
        res.redirect(`https://shib.idm.umd.edu/shibboleth-idp/profile/cas/login?service=${BASE_URL}/login`);
    }
});

app.get('/logout', (req, res) => {
    res.redirect(`https://shib.idm.umd.edu/shibboleth-idp/profile/cas/logout`);
});

app.listen(3000, () => console.log('Starting server on 3000...'));