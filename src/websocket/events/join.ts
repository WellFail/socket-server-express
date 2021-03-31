import { Socket } from 'socket.io';
import redis from '../../store/redis-storage';

const join = (socket: Socket) => {
  return (userId: string): void => {
    redis.set(userId, socket.id);
    redis.set(socket.id, userId);
  };
};

export default join;
