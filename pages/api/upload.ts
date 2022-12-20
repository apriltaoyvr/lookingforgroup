import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const buffer = Buffer.from(req.body.dataUrl, 'base64');
  const response = await fetch('https://api.supabase.io/upload', {
    method: 'POST',
    body: buffer,
  });
}
