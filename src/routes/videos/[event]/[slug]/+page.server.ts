import type { PageServerLoad } from './$types';
import { getVideos, type Video } from '../../store';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad<{ video: Video }> = async ({ params }) => {
  const videos = await getVideos();
  const video = videos.find((video) => video.slug === params.slug);
  if (!video) {
    throw error(404, 'Not found');
  }
  return {
    video
  };
};
