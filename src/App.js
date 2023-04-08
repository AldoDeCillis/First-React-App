import List from "./List";
import products from "./products";
import UseStateRemove from "./UseStateRemove";

function App() {
  return (
    <div className="container">
      <h1 className="text-center fw-bold text-white display-5">Prossimi incontri</h1>
      <div className="row justify-content-center align-items-center">
        <ul className="col-8">
          <List />
        </ul>

      </div>
    </div>
  );
}

export default App;
