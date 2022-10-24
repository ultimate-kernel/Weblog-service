import mongoose from 'mongoose';
import { DB_CONNECTION_TOKEN } from '@app/constants/system.constant';
import * as APP_CONFIG from '@app/app.config';
import logger from '@app/utils/logger';

const log = logger.scope('MongoDB');

// Factory providers more details: https://docs.nestjs.cn/8/fundamentals?id=%e5%b7%a5%e5%8e%82%e6%8f%90%e4%be%9b%e8%80%85-usefactory
export const databaseProvider = {
  provide: DB_CONNECTION_TOKEN,
  useFactory: async () => {
    const connection = () => {
      return mongoose.connect(APP_CONFIG.MONGO_DB.url, {});
    };

    mongoose.connection.on('connecting', () => {
      log.info('connecting...');
    });

    mongoose.connection.on('open', () => {
      log.info('connection open');
    });

    mongoose.connection.on('disconnected', () => {
      log.error(`disconnected!`);
    });

    mongoose.connection.on('error', (error) => {
      log.error('error!', error);
      mongoose.disconnect();
    });

    return await connection();
  },
};
