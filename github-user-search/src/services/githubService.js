import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

export async function fetchUserData({ username, location, minRepos }) {
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const headers = token
    ? { Authorization: `token ${token}` }
    : undefined;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`, { headers });

  return response.data.items; // Array of users
}
