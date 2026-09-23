import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard, Roles } from '@thallesp/nestjs-better-auth';
import { UserService } from './user.service.js';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(['ADMIN'])
  @Get('all')
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.findById(id);
  }
}
