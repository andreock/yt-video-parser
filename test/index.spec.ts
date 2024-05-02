import { get_video_details, get_video_formats } from "../index";

const test_video_id = "yvh2HYIyBAs";

describe("get_video_formats", () => {
  test("get_video_formats 4k", async () => {
    const request = await get_video_formats(test_video_id);
    expect(request[0].width).toBe(3840);
  });
  test("check video details", async () => {
    const request = await get_video_details(test_video_id);
    expect(request.videoId).toBe(test_video_id);
  });
});
