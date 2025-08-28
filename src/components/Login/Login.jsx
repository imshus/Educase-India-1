import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // prevent page refresh

    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("formData"));

    if (!storedUser) {
      setError("No account found. Please register first.");
      return;
    }

    // Match entered credentials with localStorage
    if (storedUser.email === email && storedUser.password === password) {
      setError("");
      navigate("/profile"); // redirect to profile page
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-4 w-full lg:border lg:border-gray-300 lg:shadow-md lg:w-1/5 min-h-[90%]">
        <h2 className="text-2xl font-bold mb-1">
          Signin to your<br />PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Email Address
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
              Password
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
