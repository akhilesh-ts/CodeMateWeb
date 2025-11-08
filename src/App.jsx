import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from './components/Body'
function App() {
  return (
    <>
    
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/signup" element={<div>Sign up</div>}/>
            <Route path="/login" element={<div>Login</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
