import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: "tb_usuarios" })
export class Usuario {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false, unique: true })
    usuario: string // email

    @ApiProperty()
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    senha: string

    @ApiProperty()
    @Column({length: 5000, nullable: true }) 
    foto: string

    // Relacionamento será ativado quando Produto existir
    // @ApiProperty()
    //@OneToMany(() => Produto, (produto) => produto.usuario)
    //produtos: Produto[];

}