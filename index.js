module.exports = (!process.env.JOHNNIE_COVERAGE) ?
        require('./lib/johnnie') :
        require('./coverage/johnnie');
