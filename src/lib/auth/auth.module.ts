import { AuthModule } from '@thallesp/nestjs-better-auth';
import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { createAuth } from './auth.factory.js';

@Global()
@Module({
  imports: [
    AuthModule.forRootAsync({
      inject: [PrismaService],
      useFactory: (prisma: PrismaService) => ({
        auth: createAuth(prisma),
      }),
    }),
  ],
})
export class BetterAuthModule {}
