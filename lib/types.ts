export interface SpotifyNowPlaying {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export interface SpotifyTopTrack {
  artist: string;
  songUrl: string;
  title: string;
}

export interface DevToArticle {
  title: string;
  link: string;
  views: number;
}

export interface GitHubStats {
  followers: number;
  stars: number;
}

export type GitHub = GitHubStats;

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface MostViewedDevTo {
  articles: DevToArticle[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  images?: Array<{
    alt: string;
    image: string;
  }>;
}

export interface TopTracks {
  tracks: SpotifyTopTrack[];
}

export interface Views {
  total: number;
}