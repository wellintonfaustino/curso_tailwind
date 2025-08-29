
import "./App.css";

function App() {


  return (
    <div className="from-violet-500 to-pink-600 bg-gradient-to-bl p-6 rounded-lg shadow-md mx-auto w-md- @container">
      <p className="@max-sm:text-center @sm:bg-amber-300">
        Container query, o futuro do CSS. Com container query, você pode aplicar estilos com base no tamanho do contêiner pai, em vez do tamanho da tela. Isso permite criar layouts mais flexíveis e adaptáveis, especialmente em componentes reutilizáveis.
      </p>

      <div className="w-full h-12 "></div>


      <div className="relative size-16 mx-auto">
        <span className="size-12 animate-ping bg-indigo-500 absolute inline-flex rounded-full opacity-75"></span>
        <span className="size-16  bg-indigo-500 absolute inline-flex rounded-full opacity-75"></span>
      </div>



      <div className="group relative p-4 w-3xs">

        <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-amber-50 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100"></span>
      </div>
    </div>
  );
}

export default App;
