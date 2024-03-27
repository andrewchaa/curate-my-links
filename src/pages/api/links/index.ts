import type { NextApiRequest, NextApiResponse } from 'next'
// import { MongoClient } from 'mongodb'
// import { DownloadResponse } from '../../../../types/DownloadResponse'
// import { Job } from '../../../../types/Job'

// const client = new MongoClient(process.env.mongodb_connection_string || '')
// const database = client.db('service-agent')
// const jobsCollection = database.collection('jobs')

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
    console.log('post', req.body);
    res.status(201).json({ message: 'POST request handled successfully' });
    return
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
