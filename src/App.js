import logo from './logo.svg';
import './App.css';
import Header from "./head";
import Card from "./card-block";
import CartItem from './CartItem';
import { useState } from 'react';
import Sidebar from './sidebar';
function App() {
  const [products,setProduct] = useState([
    {
      id : 1,
      title : "Product 1",
      description : "loren",
      price : 20
    },
    {
      id : 2,
      title : "Product 2",
      description : "loren",
      price : 40
    },
    {
      id : 3,
      title : "Product 3",
      description : "loren",
      price : 90
    }
  ])

  const [cartItems,setCartItem] = useState([]);
  const [total,setTotal] = useState(0)
  let addToCart = (id) => {
    let product = products.find(obj => obj.id == id);
    console.log(product)
    setCartItem([...cartItems,product]);
    setTotal(total + product.price)
  }

  let removeItem = (id) => {
    let result = window.confirm("Are you sure do you want to remove?");
    if(result){
      let cartIndex = cartItems.findIndex(obj => obj.id == id);
      setTotal(total - cartItems[cartIndex].price)
      cartItems.splice(cartIndex,1);
      setCartItem([...cartItems]);
    }
  }

  return (
    <>
    <Sidebar>
    </Sidebar>
      <Header></Header>
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
                products.map((product) => {
                  return <Card data={product} handleCart={addToCart}/>
                })
              }
            </div>
          </div>
          <div className="col-lg-4">
            <ol class="list-group list-group-numbered">
              {
                cartItems.length == 0 ? <h3>No items in cart</h3> : null
              }
            {
              cartItems.map((item) => {
                  return <CartItem handleRemove={removeItem} data={item}/>
              })
            }
             <h1>Total - Rs {total}</h1>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
