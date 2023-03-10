import Redis from 'ioredis';

export class RedisService extends Redis {
  constructor() {
    super();

    super.on('error', (err) => {
      console.error(err);
      console.log(err);
      process.exit(1);
    });

    super.on('connect', () => {
      console.log('Redis connected');
    });
  }
}
