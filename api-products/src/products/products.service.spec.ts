import { Test } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { CurrencyEnum } from './currency.enum';

const mockProduct = {
  id: 1,
  name: 'Product 1',
  description: 'Desc Product 1',
  price: 2,
  um: 'u',
  createdAt: '2021-09-23T03:43:28.082Z',
  viewCount: 5,
};

const mockProductRepository = () => ({
  findOne: jest.fn(),
});

describe('ProductService', () => {
  let productsService;
  let productsRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: ProductsRepository, useFactory: mockProductRepository },
      ],
    }).compile();

    productsService = await module.get<ProductsService>(ProductsService);
    productsRepository = await module.get<ProductsRepository>(
      ProductsRepository,
    );
  });

  describe('getProductPriceConversion', () => {
    it('Returns the product with price converted', async () => {
      productsService.getCurrencyExchangeRate = jest
        .fn()
        .mockResolvedValue(1.1);

      expect(productsService.getCurrencyExchangeRate).not.toHaveBeenCalled();

      const result = await productsService.getProductPriceConversion(
        { ...mockProduct },
        { currency: CurrencyEnum.EUR },
      );
      expect(productsService.getCurrencyExchangeRate).toHaveBeenCalled();
      expect(result.price).toEqual(2.2);
    });

    it('Returns the product with normal price when currency is USD or undefined', async () => {
      const result1 = await productsService.getProductPriceConversion(
        { ...mockProduct },
        { currency: CurrencyEnum.USD },
      );
      const result2 = await productsService.getProductPriceConversion(
        { ...mockProduct },
        {},
      );

      expect(result1.price).toEqual(2);
      expect(result2.price).toEqual(2);
    });
  });
});
