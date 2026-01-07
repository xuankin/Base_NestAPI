import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatusCode, HttpMessage } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';
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
  createProduct(@Body() productDto: ProductDto): ResponseData<ProductDto> {
    try {
      return new ResponseData<ProductDto>(
        HttpStatusCode.SUCCESS,
        HttpMessage.SUCCESS,
        this.productsService.createProduct(productDto),
      );
    } catch (error) {
      return new ResponseData<ProductDto>(
        HttpStatusCode.ERROR,
        HttpMessage.ERROR,
        null,
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
