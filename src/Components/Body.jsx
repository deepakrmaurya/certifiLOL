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
    <div className="pb-10">
      <div className="text-center mt-15">
        <input
          ref={inputData}
          className="border-2 w-[50%] h-15 rounded-lg pl-5 text-2xl"
          placeholder="Enter Certificate Number Here..."
          maxLength={12}
        />

        <div>
          <button
            onClick={searchResult}
            className="mt-5 border-2 p-3 w-30 rounded-full"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img className="" src={displayCertificate} />
      </div>
    </div>
  );
};

export default Body;
