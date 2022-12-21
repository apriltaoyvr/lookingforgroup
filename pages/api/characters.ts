import type { NextApiRequest, NextApiResponse } from 'next';
import { Character } from '@prisma/client';
import prisma from 'prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await addCharacter(req, res);
  } else if (req.method === 'GET') {
    return await getCharacters(res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function addCharacter(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  console.log(body);
  try {
    let newEntry;
    if (body.image === '') {
      newEntry = await prisma.character.create({
        data: {
          name: body.name,
          class: body.userClass,
          level: body.level,
          description: body.desc,
        },
      });
    } else {
      newEntry = await prisma.character.create({
        data: {
          name: body.name,
          class: body.userClass,
          level: body.level,
          description: body.desc,
          image: body.image,
        },
      });
    }
    return res.status(200).json(newEntry);
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error adding character' });
  }
}

async function getCharacters(res: NextApiResponse<Character[]>) {
  try {
    const characters = await prisma.character.findMany();
    return res.status(200).json(characters);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
