import { Socket } from 'socket.io';

import localCache from '../../store/cache-storage';

const join = (socket: Socket) => {
  return (userId: string): void => {
    localCache.set({ key: userId, value: socket.id });
    localCache.set({ key: socket.id, value: userId });
  };
};

export default join;
