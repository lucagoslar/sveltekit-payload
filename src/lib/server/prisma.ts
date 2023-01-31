import { env } from '$env/dynamic/private';
import type Prisma from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const options: Prisma.Prisma.PrismaClientOptions = {
	datasources: {
		db: {
			url: env.DATABASE_URL
		}
	}
};

export const prisma = new PrismaClient(options) as Prisma.PrismaClient;
