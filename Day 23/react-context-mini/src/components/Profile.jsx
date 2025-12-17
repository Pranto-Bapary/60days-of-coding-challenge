import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <p className="text-xl text-red-500">Please, login</p>;

  return (
      <p className="text-green-500 text-xl">Welcome {user.username}</p>
  );
}

export default Profile;
