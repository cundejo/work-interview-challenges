import { CurrencyEnum } from '../currency.enum';
import { IsIn, IsOptional } from 'class-validator';

export class CurrencyDto {
  @IsOptional()
  @IsIn([
    CurrencyEnum.USD,
    CurrencyEnum.CAD,
    CurrencyEnum.EUR,
    CurrencyEnum.GBP,
  ])
  currency: CurrencyEnum;
}
