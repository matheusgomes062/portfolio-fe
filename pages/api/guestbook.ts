import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import prisma from '../../lib/prisma';

interface GuestbookEntry {
  id: string;
  email: string;
  body: string;
  created_by: string;
}

interface SessionUser {
  name: string;
  email: string;
  image: string;
}

async function getSessionUser(req: NextApiRequest, res: NextApiResponse): Promise<SessionUser> {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }
  return session.user as SessionUser;
}

async function createGuestbookEntry(name: string, email: string, body: string, res: NextApiResponse): Promise<void> {
  await prisma.guestbook.create({
    data: {
      email,
      body: body.slice(0, 500),
      created_by: name,
    },
  }).catch((error) => {
    console.error('Error creating guestbook entry:', error);
  }).finally(() => {
    console.log('Guestbook entry created.');
    return res.status(200).json({ error: null });
  });
}

async function deleteGuestbookEntry(id: string, res: NextApiResponse): Promise<void> {
  await prisma.guestbook.delete({
    where: {
      id,
    },
  });

  return res.status(204).json({});
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  try {
    switch (req.method) {
      case 'GET':
        const entries = await prisma.guestbook.findMany({
          orderBy: {
            created_at: 'desc',
          },
        });
    
        return res.status(200).json(entries);
      
      case 'POST':
        const { name, email } = await getSessionUser(req, res);
        
        createGuestbookEntry(name, email, req.body.body, res);
      
      case 'DELETE':
        deleteGuestbookEntry(req.body.id, res);
      
      default:
        return res.status(405).send('Method not allowed.');
    }
  } catch (error) {
    return res.status(500).json('Unexpected Error');
  }
}