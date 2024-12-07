import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '99982458-871a-47e9-97f1-58ee1e202a75',
      name: 'product 1',
      description: 'description 1',
      price: 100,
      image_url: 'http://localhost:9000/products/1.png',
    },
    {
      id: '332a918e-51b7-4c26-ab0a-bfb649efe889',
      name: 'product 2',
      description: 'description 2',
      price: 200,
      image_url: 'http://localhost:9000/products/2.png',
    },
    {
      id: 'ffadf2d3-c480-41b7-b644-a829b26ecf35',
      name: 'product 3',
      description: 'description 3',
      price: 300,
      image_url: 'http://localhost:9000/products/3.png',
    },
    {
      id: 'ba75b100-92fa-47a9-801c-238b370e75a6',
      name: 'product 4',
      description: 'description 4',
      price: 400,
      image_url: 'http://localhost:9000/products/4.png',
    },
    {
      id: 'bde3736d-cf2a-4670-9f50-5fed1d3b06dd',
      name: 'product 5',
      description: 'description 5',
      price: 500,
      image_url: 'http://localhost:9000/products/5.png',
    },
    {
      id: '9310804e-6fd0-41be-9941-51663f76186f',
      name: 'product 6',
      description: 'description 6',
      price: 600,
      image_url: 'http://localhost:9000/products/6.png',
    },
    {
      id: '7a8d573a-9cf6-495c-a07e-869d0aa9a9bd',
      name: 'product 7',
      description: 'description 7',
      price: 700,
      image_url: 'http://localhost:9000/products/7.png',
    },
  ]);

  await app.close();
}

bootstrap();
