import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = "tsljGkwAckGl2xU9Y6ftWGOxqh5Azc43BvP4syyjNDU";

const instance = axios.create({
  baseURL: BASE_URL,
  params: { client_id: ACCESS_KEY },
});

export default async function fetchImage({ page, query }) {
  return instance.get("search/photos", {
    params: {
      page: page || 1,
      query,
    },
  });
}
