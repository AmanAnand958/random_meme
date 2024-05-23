import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  const [gif,Loading,fetchData]=useGif();
  

  return (
    <div className="'w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">Random Gif</h1>
      {
        Loading?(<Spinner/>):(<img src={gif} alt="gif" width="450" />)
      }
      
      <button className="w-10/12 bg-yellow-400 opacity-50 py-2 rounded-lg mb-[20px]"onClick={()=>fetchData()}>Generate</button>
    </div>
  );
};

export default Random;
