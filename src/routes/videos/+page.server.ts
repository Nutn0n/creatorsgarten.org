import type { PageServerLoad } from './$types';
import { getVideos, type Video } from './store';

export const load: PageServerLoad<{ videos: Video[] }> = async () => {
  return {
    videos: await getVideos()
  };
};
