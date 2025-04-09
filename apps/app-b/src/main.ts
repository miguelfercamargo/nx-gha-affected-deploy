import express from 'express';
import { shared } from '@nx-gha-affected-deploy/shared';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  console.log('🧪 Cambio de prueba en app-a');
  res.send({
    message: 'Hello API app-b',
    shared: shared()
  });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
