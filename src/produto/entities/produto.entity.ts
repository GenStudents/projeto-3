import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  descricao: string;

  @ApiProperty()
  @IsNumber()
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @ApiProperty()
  @IsBoolean()
  @Column({ default: true })
  disponivel: boolean;
  
}
