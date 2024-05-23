
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "./Spinner"
const Random = () => {
  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  const [gif,setGif]=useState("");
  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const[Loading,setLoading]=useState(false);

  async function fetchData(){
    setLoading(true);
    const {data}=await axios.get(url);
    const imgSource=data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoading(false);

  }


  useEffect(()=>{
    fetchData();
  },[]);

  function clickHandler(){
    fetchData();
  }

  
  return (
    <div className="'w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">Random Gif</h1>
      {
        Loading?(<Spinner/>):(<img src={gif} alt="gif" width="450" />)
      }
      
      <button className="w-10/12 bg-yellow-200 opacity-30 py-2 rounded-lg mb-[20px]"onClick={clickHandler}>Generate</button>
    </div>
  );
};

export default Random;