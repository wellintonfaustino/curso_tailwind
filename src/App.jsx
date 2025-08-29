
import "./App.css";

function App() {


  return (
    <div className="flex items-center justify-center">
      <div className="w-56 bg-sky-200 text-white rounded-md p-4 ">
        smartphone(640px)
      </div>

      <div className="w-56 bg-sky-200 text-white rounded-md p-4 hidden md:block">
        tablet(768px)
      </div>

      <div className="w-56 bg-sky-200 text-white rounded-md p-4 hidden lg:block">
        laptop(1024px)
      </div>

      <div className="w-56 bg-sky-200 text-white rounded-md p-4 hidden xl:block">
        desktop(1280px)
      </div>
    </div>
  );
}

export default App;
