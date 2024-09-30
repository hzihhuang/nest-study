import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 增加静态资源访问点(localhost:3000/static)，对应 public 目录
  app.useStaticAssets('public', { prefix: '/static' });

  // 允许跨域
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
