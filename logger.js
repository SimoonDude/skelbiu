import * as fs from 'fs';

const logfile = 'skelbiu.log'

var message = '';

export function append(message) {
    message.append(`${message}\n`);
};

export default function log(message) {
    const timestamp = new Date().toLocaleString();
    const logLine = `${timestamp} | ${message}\n`;

    fs.appendFile(logfile, logLine, err => {
        if (err) {
            console.err(`Error writing to file: ${err}`);
        }
    });
}