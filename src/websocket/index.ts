import { Server, ServerOptions } from 'socket.io';
import { Server as HttpServer } from 'http';

interface CreateSocketServerArgs {
  httpServer: HttpServer;
  options?: Partial<ServerOptions> | undefined;
}

const createSocketServer = ({ httpServer, options }: CreateSocketServerArgs): Server => {
  const io = new Server(httpServer, options);

  return io;
};

export default createSocketServer;
