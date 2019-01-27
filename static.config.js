import getRouteData from './src/utils/getRouteData'

export default {
  siteRoot: 'https://adoring-fermat-3d4eac.netlify.com/',
  getSiteData: () => ({
    title: 'A Fistful of Website',
	}),
  getRoutes: async () => {
    const { allArtists, allVideos } = await getRouteData()
    return [
      {
        path: '/',
        component: 'src/app/pages/home/Home.js',
        getData: () => ({ allVideos })
			},
			{
				path: 'artists',
				component: 'src/app/pages/artist-index/ArtistIndex.js',
				getData: () => ({ allArtists, allVideos })
			},
			{
				path: 'videos',
				component: 'src/app/pages/video-index/VideoIndex.js',
				getData: () => ({ allVideos })
			},
			...allArtists.map(artist => {
				const filteredVideos = allVideos.filter(video => video.fields.artist.fields.artistName === artist.fields.artistName )
				return {
					path: artist.fields.slug,
					component: 'src/app/pages/artist-page/ArtistPage.js',
					getData: () => ({
						artist,
						videos: filteredVideos
					}),
					children: [
						...filteredVideos.map(video => {
							const otherVideos = filteredVideos.filter(v => v.fields.title !== video.fields.title)
							return {
								path: video.fields.slug,
								component: 'src/app/pages/video-page/VideoPage.js',
								getData: () => ({video, otherVideos})
							}
						})
					]
				}
			}),
			{
				path: 'music',
				component: 'src/app/pages/music-index/MusicIndex.js',
				getData: () => {
					return { music: allVideos.filter(video => video.fields.videoType === 'Song')}}
			},
			{
				path: 'interviews',
				component: 'src/app/pages/interview-index/InterviewIndex.js',
				getData: () => {
					return { interviews: allVideos.filter(video => video.fields.videoType === 'Interview')}
				}
			},
			{
				path: 'about',
				component: 'src/app/pages/about/About.js'
			},
			{
				path: 'genres',
				component: 'src/app/pages/genre-index/GenreIndex.js'
			},
			{
				path: 'blog',
				component: 'src/app/pages/blog-index/BlogIndex.js'
			},
			{
				path: 'booking',
				component: 'src/app/pages/booking/Booking.js'
			},
			{
				path: '404',
				component: 'src/app/pages/404/404.js'
			}
    ]
  },
  plugins: [
    'react-static-plugin-styled-components'
  ]
}