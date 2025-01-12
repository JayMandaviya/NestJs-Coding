import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    if (!user) throw new UnauthorizedException();
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('test')
  test(@Request() req) {
    return req.user;
  }
}
