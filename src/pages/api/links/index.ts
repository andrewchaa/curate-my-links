import type { NextApiRequest, NextApiResponse } from 'next'
// import { MongoClient } from 'mongodb'
// import { DownloadResponse } from '../../../../types/DownloadResponse'
// import { Job } from '../../../../types/Job'

// const client = new MongoClient(process.env.mongodb_connection_string || '')
// const database = client.db('service-agent')
// const jobsCollection = database.collection('jobs')

export type DownloadResponse = {
  message: string
  data: any
}


export const config = {
  api: {
    responseLimit: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DownloadResponse>
) {
  console.info('donwloading jobs ...')

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

  res.status(200).json({
    data: ['test'],
    message: 'Success',
  })

  // console.info(`done with ${result.length} jobs ...`)
  console.info(`done with 1 jobs ...`)
}
