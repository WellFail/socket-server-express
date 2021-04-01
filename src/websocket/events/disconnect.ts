import { Socket } from 'socket.io';
import localCache from '../../store/cache-storage';

const disconnect = (socket: Socket) => {
  return (): void => {
    const userId = localCache.get({ key: socket.id });
    if (userId) localCache.delete({ key: userId });

    localCache.delete({ key: socket.id });
  };
};

export default disconnect;
