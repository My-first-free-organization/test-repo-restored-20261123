import { config } from './config';

export function log(level: string, msg: string) {
  if (level === 'debug' && config.logLevel !== 'debug') return;
  console.log(JSON.stringify({ level, msg, ts: Date.now() }));
}
