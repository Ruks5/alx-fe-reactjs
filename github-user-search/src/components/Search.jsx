import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const results = await fetchUserData({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Failed to fetch users. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 m-1"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 m-1"
      />
      <input
        type="number"
        placeholder="Min repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 m-1"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 m-1 rounded">
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-2">
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
