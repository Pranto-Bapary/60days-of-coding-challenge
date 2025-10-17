import React from "react";
import { useLoaderData } from "react-router";

function Github() {
  const loaderData = useLoaderData();
  return (
    <div className="min-h-screen p-10 flex justify-between max-w-screen-lg mx-auto">
      <div>
        <h3 className="text-3xl font-bold">
          Github Information{" "}
        </h3>
        <h4 className="text-xl font-semibold">
          Name: {loaderData.name}
        </h4>
        <h5 className="text-lg font-norma">
          Company: {loaderData.company}
        </h5>
        <p className="max-w-lg">{loaderData.bio}</p>
      </div>
      <div>
        <img src={loaderData.avatar_url} width={300} alt="Pranto Bapary" />
      </div>
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const url = "https://api.github.com/users/pranto-bapary";
  const res = await fetch(url);
  return res.json();
};
