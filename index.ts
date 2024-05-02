import type { VideoDetails, VideoFormat } from './types/formats.js';

const BASE_ENDPOINT = "https://www.youtube-nocookie.com/youtubei/v1/player?prettyPrint=false";

export async function get_video_json(video_id: string) {
  const request_body = {
    videoId: video_id,
    context: {
      client: {
        clientName: "WEB_EMBEDDED_PLAYER",
        clientVersion: "1.20240423.01.00",
      },
    },
  };
  return await fetch(
    BASE_ENDPOINT,
    {
      body: JSON.stringify(request_body),
      method: "POST",
    }
  );
}

/**
 * Get video formats
 * @param {string} video_id - Youtube video ID
 */
export async function get_video_formats(video_id: string): Promise<VideoFormat[]> {
  const request = await get_video_json(video_id);
  const request_json = await request.json();
  let formats: VideoFormat[] = request_json.streamingData.adaptiveFormats;
  formats = request_json.streamingData.adaptiveFormats.sort((a:VideoFormat, b:VideoFormat) => b.width - a.width);
  return request_json.streamingData.adaptiveFormats;
}

/**
 * Get video details
 * @param {string} video_id - Youtube video ID
 */
export async function get_video_details(video_id: string): Promise<VideoDetails> {
  const request = await get_video_json(video_id);
  const request_json = await request.json();
  return request_json.videoDetails;
}