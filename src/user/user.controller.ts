import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @Roles('admin')
  @UseGuards(RolesGuard)
  async createUser(
    @Body() body: { username: string; password: string; roles: string },
  ) {
    return this.usersService.createUser(
      body.username,
      body.password,
      body.roles,
    );
  }
}
