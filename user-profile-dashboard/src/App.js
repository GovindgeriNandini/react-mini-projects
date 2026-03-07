import { useEffect, useState } from "react";
import react from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      document.title = `Profile:${user.name} DashBoard`;
    } else {
      document.title = `Loading ... | User Profile Dashboard`;
    }
  }, [user]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(prev=> prev+1);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className="App">
      <h1>User Profile Dashboard</h1>
      <p> Time Spent on Page : {currentTime} seconds</p>
      {error && (
        <div
          style={{
            color: "red",
            padding: "20px",
            border: "1px solid red",
            margin: "15px",
          }}
        >
          <h2> Error!</h2>
        </div>
      )}

      {loading && !error && (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>Loading user data...</p>
        </div>
      )}

      {user && !loading && !error && (
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            margin: "20px 15px",
            textAlign: "left",
          }}
        >
          <h2> User Information </h2>
          <p>
            <strong>Name: {user.name}</strong>
          </p>
          <p>
            <strong>Email:{user.email}</strong>
          </p>
          <p>
            <strong>Phone: {user.phone}</strong>
          </p>
          <p>
            <strong>Website: {user.website}</strong>
          </p>
          <p>
            <strong>Company: {user.company.name}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
