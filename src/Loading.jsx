import React from "react";
import { TbFidgetSpinner } from "react-icons/tb";

function Loading(){
  return <div className="grow text-5xl m-auto mt-20"><TbFidgetSpinner className="animate-spin"/></div>;
}

export default Loading;