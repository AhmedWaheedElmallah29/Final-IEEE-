import { Routes, Route } from "react-router-dom";
import { LogIn } from "./Login/LogIn";
import { Note } from "./Note/Note";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<LogIn />} /> */}
      {/* <Route path="/Note" element={<Note />} /> */}
      <Route path="/" element={<Note />} />
    </Routes>
  );
}
