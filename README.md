# Youtube video parser

Parse a YouTube video details, including all formats and URL to download video directly.

This library can be used to directly download video choosing all available formats.

## How it works

This library make a simple POST request with videoId to https://www.youtube-nocookie.com and get all the information about the video.

You can use this library directly from browser since it has zero dependencies.

## Install

```bash
npm install yt-video-parser
```

### Limitations

- Download speed of video is slow