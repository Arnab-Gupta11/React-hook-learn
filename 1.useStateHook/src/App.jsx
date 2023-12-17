import "./App.css";
import Count from "./components/Count";
import Toggle from "./components/toggle";

function App() {
  return (
    <>
      <div className="w-2/3 min-h-screen flex justify-center items-center mx-auto">
        <div className="flex gap-3">
          <Count></Count>
          <Toggle></Toggle>
        </div>
      </div>
    </>
  );
}

export default App;
