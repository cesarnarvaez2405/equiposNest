import { entityBase } from 'src/utils/entityBase';
import { Column, Entity } from 'typeorm';

@Entity()
export class TarjetaLart extends entityBase {
  @Column({ unique: true, nullable: false })
  uId: string;

  @Column({ nullable: false, default: 0 })
  saldo: number;

  @Column({ type: Boolean, default: true })
  esta_activo: boolean;
}
