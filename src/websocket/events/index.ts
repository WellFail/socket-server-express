import { Socket } from 'socket.io';

import disconnect from './disconnect';
import join from './join';

const ON_JOIN = 'join';
const ON_DISCONNECT = 'disconnect';

const events = [
  { eventType: ON_JOIN, event: join },
  { eventType: ON_DISCONNECT, event: disconnect },
];

const bindEventsToSocket = (socket: Socket): void => {
  events.map(({ eventType, event }) => {
    socket.on(eventType, event(socket));
  });
};

export default bindEventsToSocket;
