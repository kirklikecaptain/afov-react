import { makePageRoutes } from 'react-static/node';
import getRouteData from './src/utilities/getRouteData';
import dotenv from 'dotenv';
dotenv.config();

const routeData = getRouteData();

export default {
  siteRoot: 'https://www.afistfulofvinyl.com/',
  getSiteData: async () => {
    const { trimmedArtistList, trimmedVideoList } = await routeData;
    return {
      videos: trimmedVideoList,
      artists: trimmedArtistList
    };
  },
  getRoutes: async () => {
    const { allVideos, allArtists } = await routeData;
    const totalVideoCount = allVideos.length;
    const musicVideos = allVideos.filter(video => video.fields.videoType === 'Song');
    const interviews = allVideos.filter(video => video.fields.videoType === 'Interview');
    return [
      {
        path: '/',
        template: 'src/app/pages/home/Home.js',
        getData: () => ({ recentVideos: allVideos.slice(0, 13) })
      },
      {
        path: 'artists',
        template: 'src/app/pages/artist-index/ArtistIndex.js',
        getData: () => ({ allArtists, allVideos })
      },
      ...makePageRoutes({
        items: musicVideos,
        pageSize: 24,
        pageToken: 'page',
        route: {
          path: 'music',
          template: 'src/app/pages/music-index/MusicIndex.js'
        },
        decorate: (musicVideos, i, totalPages) => ({
          getData: () => ({
            musicVideos,
            currentPage: i,
            totalPages
          })
        })
      }),
      {
        path: 'interviews',
        template: 'src/app/pages/interview-index/InterviewIndex.js',
        getData: () => {
          return { interviews: interviews };
        }
      },
      ...makePageRoutes({
        items: allVideos,
        pageSize: 24,
        pageToken: 'page',
        route: {
          path: 'videos',
          template: 'src/app/pages/video-index/VideoIndex.js'
        },
        decorate: (allVideos, i, totalPages) => ({
          getData: () => ({
            allVideos,
            currentPage: i,
            totalPages,
            totalVideoCount
          })
        })
      }),
      ...allArtists.map(artist => {
        const filteredVideos = allVideos.filter(
          video => video.fields.artist.fields.artistName === artist.fields.artistName
        );
        return {
          path: artist.fields.slug,
          template: 'src/app/pages/artist-page/ArtistPage.js',
          getData: () => ({
            artist,
            videos: filteredVideos
          }),
          children: [
            ...filteredVideos.map(video => {
              const otherVideos = filteredVideos.filter(v => v.fields.title !== video.fields.title);
              return {
                path: video.fields.slug,
                template: 'src/app/pages/video-page/VideoPage.js',
                getData: () => ({ video, otherVideos })
              };
            })
          ]
        };
      }),
      {
        path: '404',
        template: 'src/app/pages/404/404.js'
      }
    ];
  },
  plugins: [
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
    'react-static-plugin-styled-components'
  ]
};
