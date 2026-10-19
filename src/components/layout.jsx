import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";

const layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div
        className={`position fixed inset-0 top-0 left-0 z-50 bg-black/95 transition duration-500  ${loading ? "opacity-100" : "opacity-0 invisible pointer-events-none"}`}
      >
        <h1 className="text-5xl text-center text-yellow-400 flex items-center justify-center h-full font-bold  animate-pulse px-5 className={`transition-all duration-700 ${loading ? 'blur-xl' : 'blur-none'}`}">
          Hello Madam Jee!
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
