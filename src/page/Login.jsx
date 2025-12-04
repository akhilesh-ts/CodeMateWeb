import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    
    <div className="min-h-screen w-full bg-white relative">
  {/* Noise Texture (Darker Dots) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
    }}
  />
      <div className="min-h-screen w-full relative">
       <div className="min-h-screen w-full flex items-center justify-center relative z-10 px-4">
         <div className="w-full max-w-md">
           <LoginForm />
         </div>
       </div>
     </div>
</div>
  );
};

export default Login;
