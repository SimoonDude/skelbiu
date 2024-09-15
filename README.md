# Skelbiu updater

A simple js script which updates given skelbiu adID's.
**skelbiu-ajax.js** uses node-fetch to send a post request using user-given cookies. It's the one that works.

## Make a .env file and include the following:
```
IDS="" # place ids in quotes; seperate with commas for multiple id's
COOKIES={"Cookie": "[here]"} # input all of the cookies from your skelbiu session
```