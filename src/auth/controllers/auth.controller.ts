import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { LoginUser } from "../entities/loginuser.entity";
import { AuthService } from "../services/auth.service";

@Controller("/usuarios")
@ApiTags('Usuario')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    login(@Body() usuario: LoginUser): Promise<any> {
        return this.authService.login(usuario);
    }

}