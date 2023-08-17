import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-5xl font-bold text-violet-900">
        Developer Is Sleeping Mood Now.................
      </h1>
    </div>
  );
};

export default NotFound;
