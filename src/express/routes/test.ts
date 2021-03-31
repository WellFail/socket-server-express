import express, { Request, Response } from 'express';
import redis from '../../storage/redis-storage';
import { getPrice } from '../../storage/price-storage';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) return res.sendStatus(400);

  const socketServer = req.app.get('socketServer');

  const socketId = await redis.get(id);
  if (!socketId) return res.sendStatus(400);

  const price = getPrice({ cryptoCurrency: 'BTC' });
  socketServer.to(socketId).emit('bitcoinPrice', price);

  res.sendStatus(200);
});

export default router;
