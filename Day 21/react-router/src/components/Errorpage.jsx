import React from "react";
import { useNavigate } from "react-router";
function Errorpage() {
  const navigator = useNavigate()
  return (
    <div className="w-full h-150 flex items-center justify-center">
      <div className="flex-col items-center justify-center text-center space-y-3">
        <h1 className="text-4xl font-semibold text-gray-700">
          Error 404 - Page Not Found
        </h1>
        <button onClick={()=> navigator('/')} className="px-4 py-3 rounded bg-purple-600 hover:bg-purple-400 duration-300 cursor-pointer text-white">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Errorpage;
