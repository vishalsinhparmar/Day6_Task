import { useEffect, useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();

      if (response.ok) {
        setUsers(data);
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      setError("Error fetching data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container">
      <h1>GitHub Users</h1>

      {loading && <p className="message">Loading...</p>}
      {error && <p className="message">{error}</p>}

      {!loading && !error && users.length > 0 ? (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="card">
              <img src={user.avatar_url} alt={user.login} />
              <h2>{user.login}</h2>
              <a href={user.html_url} target="_blank" >
                View Profile
              </a>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="message">No users found.</p>
      )}
    </div>
  );
};

export default Users;
