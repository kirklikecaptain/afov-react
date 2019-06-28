import { createClient } from 'contentful';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

async function getAll(modelName, order) {
  const { items } = await client.getEntries({
    content_type: modelName,
    order: order ? order : '-sys.updatedAt',
    limit: 1000
  });
  return items;
}

export default async function getRouteData() {
  const [allArtists, allVideos] = await Promise.all([
    getAll('artist', 'fields.artistName'),
    getAll('video', '-fields.uploadDate')
  ]);

  const trimmedArtistList = allArtists.map(artist => ({
    id: artist.sys.id,
    color: artist.fields.color,
    artistName: artist.fields.artistName,
    photo: artist.fields.photo.fields.file.url,
    slug: artist.fields.slug
  }));

  const trimmedVideoList = allVideos.map(video => ({
    id: video.sys.id,
    color: video.fields.artist.fields.color,
    artistName: video.fields.artist.fields.artistName,
    title: video.fields.title,
    artistSlug: video.fields.artist.fields.slug,
    videoSlug: video.fields.slug,
    thumbnail: video.fields.thumbnail.fields.file.url
  }));

  return {
    allArtists,
    allVideos,
    trimmedArtistList,
    trimmedVideoList
  };
}
