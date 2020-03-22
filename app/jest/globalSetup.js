
require('@babel/register');
require('@babel/polyfill/noConflict');
const graphqlServer = require('../src/server').default;

module.exports = async () => {

  global.httpServer = await graphqlServer.start({ port: 4000 });

};
