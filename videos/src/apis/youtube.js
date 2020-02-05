import axios from "axios";

const KEY = "AIzaSyAsBQ13C50jieSZRnjzF0SLMJU1FNN-DwU";

export const baseParams = {
  part: "snippet",
  type: "video",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
