import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatusCode, HttpMessage } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        HttpStatusCode.SUCCESS,
        HttpMessage.SUCCESS,
        this.productsService.getAllProducts(),
      );
    } catch (error) {
      return new ResponseData<Product[]>(
        HttpStatusCode.ERROR,
        HttpMessage.ERROR,
        [],
      );
    }
  }
  @Post()
  createProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        HttpStatusCode.SUCCESS,
        HttpMessage.SUCCESS,
        this.productsService.createProduct(),
      );
    } catch (error) {
      return new ResponseData<string>(
        HttpStatusCode.ERROR,
        HttpMessage.ERROR,
        '',
      );
    }
  }
  @Get(':id')
  getProductById(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        HttpStatusCode.SUCCESS,
        HttpMessage.SUCCESS,
        this.productsService.getProductById(id),
      );
    } catch (error) {
      return new ResponseData<Product>(
        HttpStatusCode.ERROR,
        HttpMessage.ERROR,
        null,
      );
    }
  }
  @Put(':id')
  updateProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        HttpStatusCode.SUCCESS,
        HttpMessage.SUCCESS,
        this.productsService.updateProduct(),
      );
    } catch (error) {
      return new ResponseData<string>(
        HttpStatusCode.ERROR,
        HttpMessage.ERROR,
        '',
      );
    }
  }
  @Delete(':id')
  deleteProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        HttpStatusCode.SUCCESS,
        HttpMessage.SUCCESS,
        this.productsService.deleteProduct(),
      );
    } catch (error) {
      return new ResponseData<string>(
        HttpStatusCode.ERROR,
        HttpMessage.ERROR,
        '',
      );
    }
  }
}
