import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSetUp } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const prismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app);

  swaggerSetUp(app);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
