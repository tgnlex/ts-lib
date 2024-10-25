import process from 'node:process';

function cleanup(db?: any) {
  process.on('SIGTERM', () => process.exit(128 + 15));
  process.on('exit', (code: number) => {
    if (db) {
      try {
        db.close();
      } catch(err) { throw err }
    }
    console.info('[MAIN]: Process exited with code: ', code)
  });
  console.info(`[MAIN]: Program ended.`)
}

export default cleanup;
