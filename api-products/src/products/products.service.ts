import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import fetch from 'node-fetch';
import * as config from 'config';
import { ProductsRepository } from './products.repository';
import { Product } from './products.entity';
import { CurrencyDto } from './dtos/currency.dto';
import { CurrencyEnum } from './currency.enum';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}

  private logger = new Logger('AuthService');

  async getProductById(id: number, currencyDto: CurrencyDto): Promise<Product> {
    const product = await this.productsRepository.findOne({
      where: { id },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${id} not found`);

    await this.updateProductViewCount(product);

    return this.getProductPriceConversion(product, currencyDto);
  }

  async updateProductViewCount(product: Product) {
    product.viewCount += 1;
    await product.save();
  }

  async getCurrencyExchangeRate(currency: CurrencyEnum): Promise<number> {
    try {
      const thirdPartyApis = config.get('thirdPartyApis');
      const response = await fetch(thirdPartyApis.currencyExchange);
      const data = await response.json();
      return data.quotes[`USD${currency}`];
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException(
        'Error getting currency exchange rate, please try again later',
      );
    }
  }

  async getProductPriceConversion(
    product: Product,
    currencyDto: CurrencyDto,
  ): Promise<Product> {
    const { currency } = currencyDto;
    if (currency === CurrencyEnum.USD || !currency) return product;
    const currencyExchangeRate = await this.getCurrencyExchangeRate(currency);
    product.price = product.price * currencyExchangeRate;
    return product;
  }
}
