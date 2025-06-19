import { useState } from "react";
import Button from "./Button";

export default function Note() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  function addToArray() {
    setArr([...arr, { text }]);
  }

  return (
    <div className="bg-[linear-gradient(to_left,_#ffefd5,_#87cefa)] h-screen font-[cursive]">
      <div className="flex justify-end p-2">
        <Button click="click" />
      </div>
      <h1 className="text-[#4a0080] text-center text-[35px] font-extrabold pt-[30px]">
        Notes App
      </h1>
      <p className="text-center text-[#4b0082] text-[18px]">
        Double click on a note to remove it
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,_300px)] gap-[40px] justify-center p-[50px]">
        <button
          onClick={addToArray}
          className="h-[200px] border-none rounded-[10%] text-[70px] font-bold text-[#4b0082] cursor-pointer bg-[#ffd700] transition-all duration-300 ease-[ease] hover:bg-[#ff6347] hover:text-[aliceblue] hover:scale-110
"
        >
          +
        </button>
        <NewNote arr={arr} />
      </div>
    </div>
  );
}

function NewNote({ arr }) {
  return arr.map((e, i) => (
    <textarea
      key={i}
      cols={30}
      rows={10}
      placeholder="Empty Note"
      className="bg-white/70 p-[17px] rounded-[15px] border-none resize-none shadow-[0_0_3px_rgba(0,_0,_0,_0.3)] text-[18px] h-[200px] text-[#82001c] outline-none box-border transition-all duration-300 ease-in-out
placeholder:text-[#808080] placeholder:opacity-500 hover:bg-[#ffffffe6] hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.3)]
 focus:bg-[#ffffffe6] focus:shadow-[0_0_10px_rgba(0,_0,_0,_0.3)]"
    ></textarea>
  ));
}
