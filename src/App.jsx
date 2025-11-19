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
import Home from "./components/Home";
import { Toaster } from "@/components/ui/sonner";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <Toaster richColors />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/signup" element={<div>Sign up</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />

            <Route path="/app" element={<Dashboard />}>
              <Route path="/app/overview" element={<Overview />} />
              <Route path="/app/feed" element={<Feed />} />
              <Route path="/app/profile" element={<Profile />} />
              <Route path="/app/connections" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
