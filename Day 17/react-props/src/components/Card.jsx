import React from "react";

// we can pass the props by simply writing props or we can directly destructure it like that{variable1,variable2}
// in the props we can assign a default value, so if the user forgots to pass the values then default values will be shown
function Card({username = "User Profile", buttonText}) {
  return (
    <div className="relative xs:h-full xs:w-full md:h-[380px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h2 className="text-xl font-semibold text-white">{username}</h2>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-3 inline-flex cursor-pointer items-center text-sm font-semibold rounded text-white">
          {buttonText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
