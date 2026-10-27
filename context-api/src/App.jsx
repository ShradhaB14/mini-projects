import { UserContext } from "./context/UserContext";
import Navbar from "./components/navbar";

function App() {
  const userName = "Shradha";
  return<>
  <UserContext.Provider value={{userName}}>
    <Navbar/>
  </UserContext.Provider>
  </>
}
export default App;