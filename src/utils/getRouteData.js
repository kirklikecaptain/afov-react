import { createClient } from 'contentful';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default async function getRouteData() {
  try {
    // page content queries
    const allArtists = await getAll('artist', 'fields.artistName');
    const allVideos = await getAll('video', '-fields.uploadDate');
    // returns an array of case study objects that will be used
    // to programmatically build pages using a template component

    // assemble content object
    const allData = {
      allArtists,
      allVideos
    };
    // send to static.config.js
    return allData;
  } catch (e) {
    console.error(e);
  }
}

async function getOne(modelName, order) {
  const { items } = await client.getEntries({
    content_type: modelName,
    order: order ? order : '-sys.updatedAt'
  });
  return items;
}

async function getAll(modelName, order) {
  const { items } = await client.getEntries({
    content_type: modelName,
    order: order ? order : '-sys.updatedAt',
    limit: 1000
  });
  return items;
}
