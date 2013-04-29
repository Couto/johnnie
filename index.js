// Depending on the presence of the enviromental variable `JOHNNIE_COVERAGE`
// either export a version of the code for coverage analysis or the code itself.
module.exports = (!process.env.JOHNNIE_COVERAGE) ?
        require('./lib/johnnie') :
        require('./coverage/johnnie');
