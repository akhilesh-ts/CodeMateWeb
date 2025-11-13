import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/feed";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path="/signup" element={<div>Sign up</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/feed" element={<Feed/>} />
              <Route path="/profile" element={<Profile/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
