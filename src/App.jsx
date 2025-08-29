
import "./App.css";

function App() {


  return (
    <div className="space-y-4">
      <section className="bg-amber-50 p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Section Title</h2>
        <p className="text-gray-600">This is a description for the section.</p>
      </section>

      <section className="bg-cyan-50 p-4 rounded shadow space-y-6">

        <h2 className="text-lg font-semibold">Another Section</h2>
        <p className="text-gray-600  break-words truncate">This is a description for another section.</p>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni nihil sapiente facilis accusantium dolore! Architecto a at totam ipsum vero itaque explicabo, rerum corporis incidunt quis consequatur magni consequuntur.</p>
        <p className="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sequi quo voluptates officiis, adipisci veritatis recusandae ipsa nostrum culpa, modi eligendi ab quasi corporis ducimus iure possimus tempora obcaecati quisquam!</p>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis illo repellat rem ipsam fugit explicabo, laudantium ad totam quasi distinctio nesciunt, enim, eligendi aliquid nihil aliquam? Labore, unde quidem.</p>
        <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis illo repellat rem ipsam fugit explicabo, laudantium ad totam quasi distinctio nesciunt, enim, eligendi aliquid nihil aliquam? Labore, unde quidem.</p>
      </section>


      <div className="space-x-3 border-4">
        <div className="bg-white p-4 rounded shadow">Item 1</div>
        <div className="bg-white p-4 rounded shadow">Item 2</div>
        <div className="bg-white p-4 rounded shadow">Item 3</div>
      </div>
    </div>
  );
}

export default App;
