import { useState, useEffect } from "react";
function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw Error("Failed to fetch Users");
        }
        const data = await response.json();
        setUserList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {loading
        ? "Loading ..."
        : error
          ? error
          : userList.map((el) => <div key={el.id}>{el.username}</div>)}
    </>
  );
}
export default App;
