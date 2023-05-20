// We are going to log events using this file
// Creating custom middleware for example We are going to generate a log file and log any relevant error here 
// log files are good for keeping track of requests that have been made to our service.
import { format } from 'date-fns'
import { v4 as uuid } from 'uuid';
import fs from 'fs'
const fsPromises = fs.promises
import path from'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// asynchronous function to create a log file if it does not exist
export const logEvents = async (message, logFileName) => {
    // Formatting the data
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    // assigning a unique id to a log
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {

        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            // fsPromises creates a file 
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err) {
        console.log(err)
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

export default logger;