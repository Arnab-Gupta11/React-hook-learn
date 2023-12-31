import "./App.css";
import Timer from "./components/Timer";
import UseEffect1 from "./components/UseEffect1";

function App() {
  return (
    <>
      <div className="w-2/3 min-h-screen flex justify-center items-center mx-auto">
        <div>
          <h1 className="text-red-400">Vite + React</h1>
          <UseEffect1 />
          <Timer />
        </div>
      </div>
    </>
  );
}

export default App;
