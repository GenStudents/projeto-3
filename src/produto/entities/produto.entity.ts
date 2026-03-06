import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

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

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Column({ nullable: true })
  calorias?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Column({ nullable: true })
  proteina?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Column({ nullable: true })
  gordura?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Column({ nullable: true })
  acucar?: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.produtos, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

@ApiProperty({ type: () => Categoria })
@IsNotEmpty()
@ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
  onDelete: 'CASCADE',
  nullable: false,
})
categoria: Categoria;
}