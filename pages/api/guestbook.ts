import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  if (!session || !session.user) {
    return res.status(403).send('Unauthorized');
  }

  const email = session.user.email as string;
  const name = session.user.name as string;

  if(req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });

    return res.status(200).json(entries);
  }

  if (req.method === 'POST') {
    await prisma.guestbook.create({
      data: {
        email,
        body: (req.body.body || '').slice(0, 500),
        created_by: name, 
      },
    });

    return res.status(200).json({ error: null });
  }

  if (req.method === 'DELETE') {
    const id = req.body.id;
    await prisma.guestbook.delete({
      where: {
        id: String(id),
      },
    });

    return res.status(204).json({});
  }

  return res.send('Method not allowed.');
}