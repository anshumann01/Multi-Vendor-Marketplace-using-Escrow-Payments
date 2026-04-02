import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ Demo credentials
  const DEMO_USER = {
    email: "demo@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      // ✅ Save login state (basic)
      localStorage.setItem("user", JSON.stringify(DEMO_USER));

      // ✅ Redirect to Products page
      navigate("/products");
    } else {
      setError("Invalid Email or Password");
    }
  };

  // ✅ Demo login (auto redirect)
  const handleDemoLogin = () => {
    setEmail(DEMO_USER.email);
    setPassword(DEMO_USER.password);

    localStorage.setItem("user", JSON.stringify(DEMO_USER));
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#182A33]">
      <div className="w-full max-w-md bg-[#19202e] text-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your Multi-Vendor Escrow Platform
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#182A33] border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#29A37A]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-[#182A33] border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#29A37A]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#29A37A]" />
              Remember me
            </label>
            <a href="#" className="text-[#29A37A] hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#29A37A] text-white font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Demo Button */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-2 rounded-lg border border-[#29A37A] text-[#29A37A] font-semibold hover:bg-[#29A37A] hover:text-white transition"
          >
            Use Demo Account
          </button>
        </form>

        {/* Signup */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#29A37A] hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-500 pt-4 text-center text-xs text-gray-500">
          Secure escrow-based payments ensure safe transactions between buyers & sellers.
        </div>
      </div>
    </div>
  );
}