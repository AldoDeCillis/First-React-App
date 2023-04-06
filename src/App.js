import Componente1 from "./Componente1";
import products from "./products";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">


        {products.map(product => {
        console.log(product)
          return (
              <Componente1 key={product.id} {...product} >
                <p>Children</p>
              </Componente1>
          )
        })}

      </div>
    </div>
  );
}

export default App;
