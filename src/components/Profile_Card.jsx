import React from "react";

export default function Profile_Card({ user }) {



  return (
    <div className="bg-white shadow-xl/30 w-160 h-80 flex items-center justify-center rounded-4xl">
      <div>
        <img className=" h-52 w-52 rounded-full mr-12" src={user.picture} alt="" />
      </div>

      <div className="mb-8 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <h2 className="text-2xl">
          {user.title?.toUpperCase() ?? "Software Engineer"}
        </h2>
      </div>
    </div>
  );
}
