import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
/*import { Produto } from "../../produto/entities/produto.entity";*/

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @Column({ length: 255, nullable: false })
  descricao: string;

  //@ApiProperty()
  /*@OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];*/
}
