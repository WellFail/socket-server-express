import { createServer } from 'http';

import expressServer from '../express';
import createSocketServer from '../websocket';
import bindEventsToSocket from '../websocket/events';

const httpServer = createServer(expressServer);
const socketServer = createSocketServer({ httpServer });

expressServer.set('socketServer', socketServer);

socketServer.on('connection', (socket) => bindEventsToSocket(socket));

httpServer.listen(process.env.PORT, () => {
  console.log(`Server starts at http://localhost:${process.env.PORT}`);
});
