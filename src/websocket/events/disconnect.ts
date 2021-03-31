import { Socket } from 'socket.io';
import redis from '../../store/redis-storage';

const disconnect = (socket: Socket) => {
  return async (): Promise<void> => {
    const userId = await redis.get(socket.id);
    if (userId) redis.del(userId);

    redis.del(socket.id);
  };
};

export default disconnect;
