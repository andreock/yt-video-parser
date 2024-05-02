export declare interface VideoFormat {
  itag: number;
  url: string;
  mimeType: string;
  bitrate: number;
  width: number;
  height: number;
  initRange: { start: number; end: number };
  indexRange: { start: number; end: number };
  lastModified: number;
  contentLength: number;
  quality: string;
  fps: number;
  qualityLabel: string;
  projectionType: string;
  averageBitrate: number;
  colorInfo: {
    primaries: string;
    transferCharacteristics: string;
    matrixCoefficients: string;
  };
  approxDurationMs: number;
}

export declare interface VideoDetails {
  videoId: string;
  title: string;
  lengthSeconds: number;
  keywords: string[];
  channelId: string;
  isOwnerViewing: boolean;
  shortDescription: string;
  isCrawlable: boolean;
  thumbnail: { thumbnails: [{ url: string; width: number; height: number }] };
  allowRatings: boolean;
  viewCount: string;
  author: string;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
}
