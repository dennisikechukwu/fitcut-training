"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ACCESS_PASSWORD } from "@/utils/password";

// This component contains the logic that uses useSearchParams
function VerifyContent() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [nextPath, setNextPath] = useState("/");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const next = searchParams.get("next");
    if (next) {
      setNextPath(next);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === ACCESS_PASSWORD) {
      router.push(nextPath);
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded shadow-lg w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Enter Password</h2>
      <input
        type="password"
        placeholder="Password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        ACCESS PLAN
      </button>
    </form>
  );
}

// The main component that wraps the content in Suspense
export default function Verify() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyContent />
      </Suspense>
    </div>
  );
}