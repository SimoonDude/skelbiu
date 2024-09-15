# Skelbiu updater

A simple js script which updates given adID's. 
**skelbiu.js** uses puppeteer while as **skelbiu-ajax.js** uses node-fetch to send a post request.

skelbiu-ajax.js is the one that works.

## Make a .env file and include the following:
```
IDS="" # place ids in quotes; seperate with commas for multiple id's
COOKIES={"Cookie": "[here]"} # input all of the cookies from your skelbiu session
```