import { MongoClient } from 'mongodb'
import { MyLink } from "./types";

const client = new MongoClient(process.env.mongodb_connection_string || '')
const database = client.db('curate-my-links')
const linksCollection = database.collection('links')

export const insertLink = async (myLink: MyLink) => {
  console.log('Creating a new link: ', myLink)

  try {
    await linksCollection.updateOne(
      { email: myLink.email, link: myLink.link,},
      { $set: { ...myLink } },
      { upsert: true }
    );

    return { code: '201', data: myLink }
  } catch (error) {
    return { code: '500', error }
  }
}
