import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PROJECT_PORT ||7800;
  app.enableCors({
    origin:'http://localhost:6000'
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))
  app.setGlobalPrefix('api/v1')
  await app.listen(port, ()=>console.log(`server is listening on port ${port}`) 
  ); 
} 
bootstrap();
 