import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/cart';
import ProductsList from './components/productsList';
import ProductDetail from './components/productDetail';
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([]);
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
  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          
          <Route path="/cart/:id" render={props => <Cart {...props} data={products}/>}/>
          <Route path="/:id" render={props => <ProductDetail {...props} data={products}/>}/>
          <Route path="/" render={props => <ProductsList {...props} data={products}/>}/>
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


