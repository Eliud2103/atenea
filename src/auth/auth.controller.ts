import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { User } from './schemas/user.schema';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {} 
    @Post('register')
    async register(@Body() registerDto: RegisterDto): Promise<User> {
        
      return this.authService.register(registerDto);
    }
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
      return this.authService.login(loginDto.email, loginDto.password);
    }
   
}
