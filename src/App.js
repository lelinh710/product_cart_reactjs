import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/cart";
import ProductDetail from "./components/productDetail/productDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsList from "./components/productList/productsList";
//main
function App() {
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    async function getAPI() {
      const { data: respone } = await axios.get(
        "https://winkelwagon.herokuapp.com/api/products"
      );
      //
      setProducts(respone);
      //console.log(respone);
      // console.log(product);
    }
    getAPI();
    // console.log(product);
  }, []);

  const handleOnChange = (evt) => {
    const value = evt.target.value;
    setQty(value);
  };
  const handleIncrement = (q) => {
    let plus = q + 1;
    setQty(plus);
  };

  const handleDecrement = (q) => {
    let minius = q - 1;
    setQty(minius);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route
            path="/cart/:id?"
            render={(props) => <Cart {...props} data={products} />}
          />
          <Route
            path="/:id"
            render={(props) => (
              <ProductDetail
                {...props}
                data={products}
                onChangeQty={handleOnChange}
                onDecrement={() => handleDecrement(qty)}
                onIncrement={() => handleIncrement(qty)}
                qty={qty}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <ProductsList
                {...props}
                data={products}
                onChangeQty={handleOnChange}
                onDecrement={() => handleDecrement(qty)}
                onIncrement={() => handleIncrement(qty)}
                qty={qty}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

// class App extends Component {
//   componentDidMount() {
//     // const promise = axios.get('https://winkelwagon.herokuapp.com/api/products');
//     console.log(axios.get('https://jsonplaceholder.typicode.com/posts'));
//   }
//   render() {
//     return <div className="App">
//     <Navbar/>
//     <div className="content">
//       <Switch>
//         <Route path="/products" component={Products}/>
//         <Route path="/cart" component={Cart}/>
//       </Switch>
//     </div>
//   </div>;
//   }
// }

export default App;
