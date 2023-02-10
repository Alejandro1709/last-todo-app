import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/utils/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { title } = req.body;
    const todo = await prisma.todo.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/ /g, '-'),
      },
    });

    res.status(201).json(todo);
  }
}
