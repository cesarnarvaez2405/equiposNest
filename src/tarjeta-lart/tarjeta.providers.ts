import { DataSource } from 'typeorm';
import { TarjetaLart } from './entities/tarjeta-lart.entity';

export const tarjetaProviders = [
  {
    provide: 'TARJETA_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TarjetaLart),
    inject: ['DATA_SOURCE'],
  },
];
