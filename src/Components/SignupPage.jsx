import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#182A33]">
      <div className="w-full max-w-md bg-[#19202e] text-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">
          Join our Multi-Vendor Escrow Platform
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-[#182A33] border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#29A37A]"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#182A33] border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#29A37A]"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create password"
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

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-4 py-2 rounded-lg bg-[#182A33] border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#29A37A]"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Select Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#182A33] border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#29A37A]"
            >
               <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#29A37A] text-white font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a onClick={()=>navigate("/login")} className="text-[#29A37A] hover:underline">
            Login
          </a>
        </div>

        <div className="mt-6 border-t border-gray-500 pt-4 text-center text-xs text-gray-500">
          Secure escrow-based payments protect both buyers and sellers.
        </div>
      </div>
    </div>
  );
}
