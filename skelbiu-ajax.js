import fetch from "node-fetch";
import 'dotenv/config';
import _ from 'lodash';

const requestHeaders = await JSON.parse(process.env.COOKIES);

const defaultRequestHeaders = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "Content-Length": "13",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
};

const body = process.env.IDS.replace(/ /g, '').split(',').map(id => 'adID=' + id); // prepare the adID's

const urls = {
    prod: 'https://www.skelbiu.lt/index.php?mod=ajax&action=renewAd',
    localhost: 'http://localhost:3000',
};

const sendRequest = async () => {
    body.forEach(id => { // for each ad send post request
        fetch(urls.prod, {
            method: "POST",
            body: id,
            headers: { ...defaultRequestHeaders, ...requestHeaders },
        }).then(async (res) => {
            console.log(`${id} renewed`);
            console.log(`New rating: ${(await res.json()).placesHTML}`);
        });
    });
};

await sendRequest();
