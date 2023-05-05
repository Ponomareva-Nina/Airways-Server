import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4400;
  const config = new DocumentBuilder()
    .setTitle('Airways server')
    .setDescription('Docimentation for REST API')
    .setVersion('1.0.0')
    .build();

  const documentation = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documentation);

  await app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}

bootstrap();
