import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Request from "./page/Request";
import Profile from "./components/Profile";
import Dashboard from "./page/Dashboard";
import Overview from "./page/Overview";
import Connections from "./page/Connections";
import Home from "./page/Home";
import { Toaster } from "@/components/ui/sonner";
import Discover from "./page/Discover";
import Signup from "./page/Signup";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Toaster richColors />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<Dashboard />}>
              <Route path="/app/Home" element={<Overview />} />
              <Route path="/app/Requests" element={<Request />} />
              <Route path="/app/Discover" element={<Discover />} />
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
