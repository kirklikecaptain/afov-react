import { createClient } from 'contentful';

export const client = createClient({
  space: 'iy94k83j702j',
  accessToken: 'a48fe13b92bcd2badeb15681a391c72d3c220283d86c07655dd0f9ae3db2e951'
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

export async function getOne(modelName, order) {
  const { items } = await client.getEntries({
    content_type: modelName,
    order: order ? order : '-sys.updatedAt'
  });
  return items;
}

export async function getAll(modelName, order) {
  const { items } = await client.getEntries({
    content_type: modelName,
    order: order ? order : '-sys.updatedAt'
  });
  return items;
}
