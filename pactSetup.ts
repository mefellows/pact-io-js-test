// @ts-ignore
import { Pact } from '@pact-foundation/pact/pact';
// @ts-ignore
import path from 'path';
​
// @ts-ignore
global.provider = new Pact({
  port: 1234,
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  cors: true,
  pactfileWriteMode: 'update',
  consumer: 'Exchange',
  provider: 'LP Service'
});
