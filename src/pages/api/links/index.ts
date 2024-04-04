import type { NextApiRequest, NextApiResponse } from 'next'
import { insertLink, listLinks } from './linksRepository'

export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    console.log('Listing links for user: ', req.query.email);

    const listResult = await listLinks(req.query.email as string);
    if (listResult.error) {
      return res.status(500).json({ message: listResult.error });
    }

    return res.status(200).json({ data: listResult.data, message: 'Success' });
  }

  if (req.method === 'POST') {
    const insertResult = await insertLink({
      email: req.body.email,
      link: req.body.link,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return insertResult.error
      ? res.status(500).json({ message: insertResult.error })
      : res.status(201).json({ message: 'New link has been successfully saved' });
  }


  res.status(405).json({ message: 'Method Not Allowed' });
}
