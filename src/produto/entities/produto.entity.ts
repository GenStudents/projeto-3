import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

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
