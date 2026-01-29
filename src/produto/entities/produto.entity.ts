import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
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

  @ManyToOne(() => Usuario, (usuario) => usuario.produtos, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
