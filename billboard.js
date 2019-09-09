const log = require('@ajar/marker');

export const billboard = (msg)=> {
    log.v('-----------------')
    log.info(msg)
    log.v('-----------------')
}