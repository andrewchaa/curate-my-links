import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import { insertLink } from './linksRepository'

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
    res.status(200).json({
      data: [{
        _id: '1',
        link: 'https://www.google.com',
        title: 'Google',
        description: 'Search engine',
        tags: ['search', 'engine'],
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      message: 'Success',
    })
    return
  }

  if (req.method === 'POST') {
    console.log('Creating a new link: ', req.body);

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

  // const result = await jobsCollection
  //   .find<Job>({})
  //   .project({
  //     _id: 0,
  //     jobNo: 1,
  //     jobStatus: 1,
  //     jobNotes: 1,
  //     postcode: '$customer.address.postcode',
  //     serialNumber: '$product.serialNumber',
  //     model: '$product.modelName',
  //     fuel: '$product.fuel',
  //     customer: '$customer.name',
  //     engineer: '$engineer.name',
  //     dateAttended: '$scheduledVisit.date',
  //     jobRequested: '$serviceRequestDate',
  //   })
  //   .toArray()


  // console.info(`done with ${result.length} jobs ...`)
}
