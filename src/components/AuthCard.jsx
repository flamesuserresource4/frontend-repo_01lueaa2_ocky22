import React, { useState } from "react";

const AuthCard = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur border border-gray-200 rounded-2xl shadow-xl p-6">
      <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-200">
        <button
          onClick={() => setMode("login")}
          className={`flex-1 py-2 text-sm font-medium transition ${
            mode === "login"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          Sign in
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`flex-1 py-2 text-sm font-medium transition ${
            mode === "signup"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          Create account
        </button>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        {mode === "signup" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Invite Code</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your private invite code"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Private community only — invite required.
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          {mode === "login" ? "Sign in" : "Create account"}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By continuing, you agree to our community rules.
      </p>
    </div>
  );
};

export default AuthCard;
