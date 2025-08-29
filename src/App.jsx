
import "./App.css";

function App() {


  return (
    <div className="space-y-6">
      <section className="bg-amber-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Section Title</h2>
        <p className="text-gray-700">This is a description for the section.</p>
      </section>

      <section className="bg-cyan-100 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold mb-2">Another Section</h2>
        <p className="text-gray-700 truncate">This is a description for another section.</p>
        <p className="text-justify text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni nihil sapiente facilis accusantium dolore! Architecto a at totam ipsum vero itaque explicabo, rerum corporis incidunt quis consequatur magni consequuntur.
        </p>
        <p className="text-left text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sequi quo voluptates officiis, adipisci veritatis recusandae ipsa nostrum culpa, modi eligendi ab quasi corporis ducimus iure possimus tempora obcaecati quisquam!
        </p>
        <p className="text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis illo repellat rem ipsam fugit explicabo, laudantium ad totam quasi distinctio nesciunt, enim, eligendi aliquid nihil aliquam? Labore, unde quidem.
        </p>
        <p className="text-right text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis illo repellat rem ipsam fugit explicabo, laudantium ad totam quasi distinctio nesciunt, enim, eligendi aliquid nihil aliquam? Labore, unde quidem.
        </p>
      </section>

      <div className="space-y-3 border-2 border-gray-200 rounded-lg p-4 bg-white">
        <div className="bg-gray-50 p-4 rounded shadow">Item 1</div>
        <div className="bg-gray-50 p-4 rounded shadow">Item 2</div>
        <div className="bg-gray-50 p-4 rounded shadow">Item 3</div>
        <img
          src="https://pampili.com.br/cdn/shop/files/7040200001399_3_1800x1800.jpg?v=1755275543g"
          alt="Description"
          className="w-80 h-auto rounded-lg transition duration-200 rotate-x-15 rotate-y-30  hover:scale-110"
        />
      </div>
    </div>
  );
}

export default App;
