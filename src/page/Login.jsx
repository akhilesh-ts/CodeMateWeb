import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div className="min-h-screen w-full relative bg-[#171A1FFF]">
      <div className="min-h-screen w-full flex items-center justify-center relative z-10 px-4">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
