import React from "react";

const LogoHeader = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg flex items-center justify-center text-white font-bold">
        AR
      </div>
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Autism Rules
        </h1>
        <p className="text-sm text-gray-500 -mt-0.5">
          A project from our Discord friends server
        </p>
      </div>
    </div>
  );
};

export default LogoHeader;
