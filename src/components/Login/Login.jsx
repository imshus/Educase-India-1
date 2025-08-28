import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-4 w-full lg:border lg:border-gray-300 lg:shadow-md lg:w-1/5 min-h-[90%]">
        <h2 className="text-2xl font-bold mb-1">
          Signin to your<br />PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        <form className="space-y-6">
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Email Address
            </div>
            <input
              type="email"
              id="email"
              placeholder=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Password
            </div>
            <input
              type="password"
              id="password"
              placeholder=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
          <button
            onClick={()=>navigate('/profile')}
            type="submit"
            className="w-full bg-gray-300 text-white font-semibold py-2 rounded-md cursor-not-allowed"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};
export default Login;
