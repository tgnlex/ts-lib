import {createServer} from 'node:http';
import cleanup from './cleanup.ts';

function server(app: any, port?: number = 4000, db?: any ) {
  let appServer = createServer(app);  
  return appServer.listen(port, (err) => {
    if (err) {
      if (db) {
        return cleanup(db);
      } else {
        return cleanup();
      }
    }
    console.info(`[API]: Server listening on port ${port}`);
  });
}

export default server;
