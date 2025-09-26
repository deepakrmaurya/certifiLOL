import React, { useRef, useState } from "react";
import data from "../utils/constants";

const Body = () => {
  const inputData = useRef();
  const [displayCertificate, setDisplayCertificate] = useState();

  const searchResult = () => {
    let certificateNumber = inputData.current.value;

    if (certificateNumber === "") return;

    const searchedCertificate = data.find(
      (user) => user.certificateNum === certificateNumber
    );
    setDisplayCertificate(searchedCertificate.linkToCertificate);
    inputData.current.value = " ";
  };

  return (
    <div className="pb-10 text-white bg-gradient-to-b from-blue-500">
      <div className="text-center pt-24">
        <input
          ref={inputData}
          className=" bg-slate-800 border-2 border-slate-600 w-[90%] sm:w-[50%] font-bold h-16 rounded-lg pl-5 text-xl sm:text-2xl placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          placeholder="Enter Certificate Number Here..."
          maxLength={12}
        />

        <div>
          <button
            onClick={searchResult}
            className="mt-8 border-2 border-purple-600 bg-purple-600 p-3 w-40 rounded-full text-lg font-semibold hover:bg-purple-700 hover:border-purple-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          className="rounded-lg shadow-2xl shadow-black/50"
          src={displayCertificate}
        />
      </div>
    </div>
  );
};

export default Body;
