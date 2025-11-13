import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("appu@gmail.com");
  const [password, setPassword] = useState("appu@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("this is the login response", res);
      dispatch(adduser(res.data));
      navigate("/dashboard");
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-center text-xl">
          Code Mate
        </legend>

        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        /> 
        <p className="text-red-500 text-sm">{error}</p>
        <button
          className="btn btn-neutral mt-4 bg-blue-400"
          onClick={handleLogin}
        >
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
