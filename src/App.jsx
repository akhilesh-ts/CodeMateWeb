import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/feed";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Connections from "./components/Connections";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/signup" element={<div>Sign up</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
