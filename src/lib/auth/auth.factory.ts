import { prismaAdapter } from 'better-auth/adapters/prisma';
import { betterAuth } from 'better-auth';
import { PrismaService } from '../database/prisma.service.js';

export const createAuth = (prisma: PrismaService) =>
  betterAuth({
    database: prismaAdapter(prisma, {
      provider: 'postgresql',
    }),
    emailAndPassword: {
      enabled: true,
    },
    user: {
      additionalFields: {
        role: {
          type: 'string',
          required: false,
          defaultValue: 'PARTICIIPANT',
          input: false,
        },
      },
    },
  });
