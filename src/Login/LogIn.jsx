import { useState } from "react";
import { Note } from "../Note/Note";
import { useNavigate } from "react-router-dom";

export function LogIn() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    userName === "ahmed" && pass === "123"
      ? navigate("/Note")
      : console.log("false");
    setUserName("");
    setPass("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Email"
            className="p-3 rounded-xl  border-gray-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl border-solid border-gray-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className=" cursor-pointer bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
