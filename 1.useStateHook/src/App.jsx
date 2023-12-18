import "./App.css";
import ArrayUseState from "./components/ArrayUseState";
import Count from "./components/Count";
import ObjectUseState from "./components/ObjectUseState";
import Toggle from "./components/toggle";

function App() {
  return (
    <>
      <div className="w-2/3 min-h-screen flex justify-center items-center mx-auto">
        <div>
          <div className="flex items-center gap-3">
            <Count></Count>
            <Toggle></Toggle>
          </div>
          <div className="text-lg">
            <ArrayUseState />
            <ObjectUseState />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
