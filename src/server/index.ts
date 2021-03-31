import { createServer } from 'http';

import CryptoCompareAPI from '../integrations/cryptocompare';
import expressServer from '../express';
import createSocketServer from '../websocket';
import redis from '../storage/redis-storage';
import { setPrice } from '../storage/price-storage';

const httpServer = createServer(expressServer);
const socketServer = createSocketServer({ httpServer });

expressServer.set('socketServer', socketServer);

socketServer.on('connection', (socket) => {
  socket.on('join', (userId) => {
    redis.set(userId, socket.id);
    redis.set(socket.id, userId);
  });

  socket.on('disconnect', async () => {
    const userId = await redis.get(socket.id);
    if (userId) redis.del(userId);

    redis.del(socket.id);
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(`Server starts at http://localhost:${process.env.PORT}`);

  CryptoCompareAPI.getPrice({ cryptoCurrency: 'BTC', currency: 'USD' }).then((data) =>
    setPrice({ cryptoCurrency: 'BTC', value: data }),
  );
});
