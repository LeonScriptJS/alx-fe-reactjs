import axios from "axios";

export const fetchUserData = async ({
  username,
  location,
  repos,
  page = 1,
}) => {
  let query = "";

  if (username) query += username;
  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>=${repos}`;

  const response = await axios.get(
    "https://api.github.com/search/users",
    {
      params: {
        q: query,
        page,
        per_page: 5,
      },
    }
  );

  return response.data.items;
};
