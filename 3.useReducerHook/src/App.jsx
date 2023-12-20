import "./App.css";
import IncDec from "./components/IncDec";

function App() {
  return (
    <>
      <div className="w-2/3 min-h-screen flex justify-center items-center mx-auto">
        <div>
          <h1 className="text-red-400">Vite + React</h1>
          <IncDec />
        </div>
      </div>
    </>
  );
}

export default App;
