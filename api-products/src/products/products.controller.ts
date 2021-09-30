import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.entity';
import { CurrencyDto } from './dtos/currency.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/:id')
  getProductById(
    @Param('id', ParseIntPipe) id: number,
    @Query(ValidationPipe) currencyDto: CurrencyDto,
  ): Promise<Product> {
    return this.productsService.getProductById(id, currencyDto);
  }
}
