
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
import { useState } from "react";

const Tag = () => {
  const [tag,setTag]=useState('Car');
  const [gif,Loading,fetchData]=useGif(tag);

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {
        Loading ? (<Spinner />) : (<img src= {gif} alt="img" width="450" />)
      }

      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag} />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
