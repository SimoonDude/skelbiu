# Skelbiu.lt ad renewer

A simple js script which updates given skelbiu skelbimai/advertisiments.\
Paprastas būdas savo skelbiu.lt skelbimus (automatiškai) atnaujinti.

## Getting started
**skelbiu-ajax.js** uses node-fetch to send a post request using user-given cookies.
### Preparation
1. Start by copying the skelbiu.lt initial website get request cookie header. This will include the necessary credentials and cookie agreements so that no pop-ups appear.

2. Next, grab your advertisement ID (or IDs) by:
* Copying the it from the URL when you have it open in a browser, ex.: 'https://www.skelbiu.lt/skelbimai/advert-thing-**`12345678`**.html'

3. Make a `.env` file and include the following:
```
IDS="" # place IDs in quotes; seperate with commas for multiple IDs
COOKIES={"Cookie": "[here]"} # input all of the cookies from your skelbiu session
```
## Usage
`node skelbiu-ajax.js`

The js script will automatically update the each ID and log out it's process. A typical run would look like:
```
Found IDs [ 'adID=12345678' ]
Attempting adID=12345678 renewal
New rating: 41 (+2698)
```
### Automation
If the desire to automate this arises, a simple scheduled task is simple and effective. Depending on your operating system, there are many options to choose from. A cronjob on Ubuntu would look like:

`0 8 * * * /path/to/skelbiu-ajax.js`