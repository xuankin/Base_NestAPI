import {} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';
@Injectable()
export class ProductsService {
  private products: Product[] = [
    new Product({ id: 1, categoryId: 2, productName: 'Product A', price: 100 }),
    new Product({ id: 2, categoryId: 2, productName: 'Product B', price: 200 }),
  ];
  getAllProducts(): Product[] {
    return this.products;
  }
  createProduct(productDto: ProductDto): ProductDto {
    return productDto;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === Number(id));
  }
  updateProduct(): string {
    return 'Product updated';
  }
  deleteProduct(): string {
    return 'Product deleted';
  }
}
