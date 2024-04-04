import type { NextApiRequest, NextApiResponse } from 'next'
import { insertLink, listLinks } from './linksRepository'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query;

  if (req.method === 'GET') {
    console.log('Listing links for user: ', email);

    const listResult = await listLinks(email as string);
    if (listResult.error) {
      return res.status(500).json({ message: listResult.error });
    }

    return res.status(200).json({ data: listResult.data, message: 'Success' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
