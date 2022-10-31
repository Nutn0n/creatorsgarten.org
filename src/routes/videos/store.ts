import ExpiryMap from 'expiry-map';
import pMemoize from 'p-memoize';

export const getVideos = pMemoize(
  async () => {
    const r = await fetch('https://creatorsgarten.github.io/videos/videos.json');
    const data = await r.json();
    return data.videos as Video[];
  },
  {
    cache: new ExpiryMap(60000)
  }
);

export interface Video {
  event: string;
  slug: string;
  data: {
    title: string;
    speaker: string;
    youtube: string;
    description: string;
    published?: boolean;
  };
  content: string;
  filePath: string;
  imageFilePath?: string;
}
