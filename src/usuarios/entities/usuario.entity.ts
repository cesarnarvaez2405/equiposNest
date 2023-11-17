import { Role } from '../../common/enums/rol.enum';
import { entityBase } from '../../utils/entityBase';
import { Column, Entity } from 'typeorm';

@Entity()
export class Usuario extends entityBase {
  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column()
  nombre: string;

  @Column({ type: 'numeric' })
  telefono: number;

  @Column({ nullable: false, enum: Role, default: Role.Admin, type: 'enum' })
  rol_id: string;

  @Column({ type: Boolean, default: true })
  esta_activo: boolean;
}
