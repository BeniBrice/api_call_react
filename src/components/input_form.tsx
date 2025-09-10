import { useState } from "react";
import searchSvg from "../assets/svg/search.svg";

interface props {
  onClick: (value: string) => void;
}

function InputForm({ onClick }: props) {
  let [userValue, setUserValue] = useState("");
  return (
    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-black focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
      <input
        id="username"
        name="username"
        type="text"
        onChange={(e) => setUserValue(e.target.value)}
        placeholder="Search user by id"
        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
      />
      <img
        src={searchSvg}
        alt="svg search"
        className="h-7 w-7"
        onClick={() => onClick(userValue)}
      />
    </div>
  );
}
export default InputForm;
