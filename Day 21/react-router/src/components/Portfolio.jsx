import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import "../App.css";

function Portlio() {

  const data = useLoaderData()
  return (
    <div className="w-full h-150 flex items-center justify-center">
      <div className="flex-col space-y-5 justify-center items-center text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-700">
        Hello, I am {data.name}
      </h1>
      <img className="mx-auto text-center" src={data.avatar_url} width={300} alt="Pranto Bapary" />
      <Link className="mx-auto mb-4 text-center inline-block py-3 px-5 rounded bg-purple-500 hover:bg-purple-400 duration-300 text-white" to="https://github.com/pranto-bapary">View Github Profile</Link>
      </div>
    </div>
  );
}

export default Portlio;

export const Portfolioloader = async () =>{
   const url = "https://api.github.com/users/pranto-bapary";
  const res = await fetch(url)
  return res.json()
}
