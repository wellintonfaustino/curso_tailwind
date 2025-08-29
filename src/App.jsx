
import "./App.css";

function App() {


  return (
    <div className="w-[800px] min-h-[300px] mx-auto bg-sky-200 grid-cols-3 gap-4 p-4 grid">
      <div className="w-full min-h-14 bg-red-200 col-span-3"> 1 </div>
      <div className="w-full min-h-14 bg-red-200 col-span-2 row-span-3"> 2 </div>
      <div className="w-full min-h-14 bg-red-200 "> 3 </div>
      <div className="w-full min-h-14 bg-red-200 "> 4 </div>
      <div className="w-full min-h-14 bg-red-200 col-span-3"> 5 </div>
    </div>
  );
}

export default App;
