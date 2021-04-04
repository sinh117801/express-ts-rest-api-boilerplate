import { BadRequestException } from '@libs/errors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  errorFormat: 'pretty',
});

const list = async () => {
  const users = await prisma.user.findMany({ include: { posts: true } });

  return users;
};

const create = async (options: CreateOptions) => {
  const existedUser = await prisma.user.findUnique({
    where: { email: options.email },
  });

  if (existedUser) throw new BadRequestException('Email is already exited.');

  const user = await prisma.user.create({ data: options });

  return user;
};

export default { list, create };

interface CreateOptions {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
