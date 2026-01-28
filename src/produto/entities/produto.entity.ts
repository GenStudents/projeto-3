import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  nome: string;

  @IsNotEmpty()
  @Column()
  descricao: string;

  @IsNumber()
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @IsBoolean()
  @Column({ default: true })
  disponivel: boolean;
}
