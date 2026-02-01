import axios from "axios";

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = username || "";

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`;

  const response = await axios.get(url);

  return response.data.items;
};
