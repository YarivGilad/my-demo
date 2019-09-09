const log = require('@ajar/marker');

const billboard = (msg)=> {
    log.v('-----------------')
    log.info('|    '+msg+'    |')
    log.v('-----------------')
}

module.exports = {
    billboard
}