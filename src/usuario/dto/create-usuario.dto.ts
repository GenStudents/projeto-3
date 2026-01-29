import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  usuario: string;

  @MinLength(8)
  senha: string;

  foto?: string;
}
