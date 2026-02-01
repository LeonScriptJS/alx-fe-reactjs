import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPage(1);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: 1,
      });
      setUsers(data);
    } catch {
      setError("No users found");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...data]);
    } catch {
      setError("Failed to load more users");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white shadow p-4 rounded"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location (e.g. Nigeria)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />

       <input
  type="number"
  placeholder="Minimum repositories"
  value={minRepos}
  onChange={(e) => setMinRepos(e.target.value)}
  className="border p-2 rounded"
/>


        <button className="bg-black text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-3 rounded flex gap-4 items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 w-full bg-gray-200 p-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
