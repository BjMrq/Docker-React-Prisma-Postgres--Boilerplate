import '@babel/polyfill/noConflict';
import { APP_NAME, PORT } from './config';
import graphqlServer from './server';

// Start the graphql server
graphqlServer.start({ port: PORT }, () => {

  console.log(`${APP_NAME} is listening on port ${PORT}, let's play!`);

});
