# Skelbiu updater

A simple js script which updates given skelbiu adID's.

**skelbiu-ajax.js** uses node-fetch to send a post request using user-given cookies. It's the one that works.

## Usage

`npm install`

### Make a `.env` using the following template:
```
IDS="" # place the ads ids; seperate with commas for multiple id's ex.: ="1234567, 749841"
COOKIES={"Cookie": "[here]"} # input all of the cookies from your skelbiu session
```

`node skelbiu-ajax.js`

The cookies can be copied by viewing any GET request headers on the site.
