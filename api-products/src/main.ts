import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`API running on port ${port}`);
}
bootstrap();
