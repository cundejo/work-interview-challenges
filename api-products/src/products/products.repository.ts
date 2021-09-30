import { EntityRepository, Repository } from 'typeorm';
import { Product } from './products.entity';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {}
