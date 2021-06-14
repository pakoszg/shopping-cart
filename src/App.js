import HomePage from "./pages/HomePage";
import Webshop from "./pages/Webshop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import useAddToCart from "./components/useAddToCart";
import WebshopItemSingle from "./components/WebsopItemSingle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { webshopItems } from "./assets/webshopItems";
import "./Sass/App.scss";
import PageNotFound from "pages/PageNotFound";

function App() {
  const {
    handleItems,
    totalQuantity,
    items,
    changeQuantity,
    deleteItem,
    updateTotalPrice,
    updateTotalQuantity,
    totalPrice,
  } = useAddToCart();

  const [showCart, setShowCart] = useState(false);

  function toggleCart() {
    showCart ? setShowCart(false) : setShowCart(true);
  }

  const findWebshopItem = (routeName) =>
    webshopItems.find((item) => item.routeName === routeName);

  return (
    <Router>
      <div className="App">
        <Navbar totalQuantity={totalQuantity} toggleCart={toggleCart} />
        {showCart ? (
          <Cart
            items={items}
            changeQuantity={changeQuantity}
            toggleCart={toggleCart}
            deleteItem={deleteItem}
            updateTotalPrice={updateTotalPrice}
            updateTotalQuantity={updateTotalQuantity}
            totalQuantity={totalQuantity}
            totalPrice={totalPrice}
            webshopItems={webshopItems}
          />
        ) : null}
        <Switch>
          <Route exact path="/shopping-cart">
            <HomePage />
          </Route>
          <Route exact path="/webshop">
            <Webshop handleItems={handleItems} webshopItems={webshopItems} />
          </Route>
          <Route
            exact
            path="/shop/:routeName"
            render={(routeProps) => (
              <WebshopItemSingle
                webshopItem={findWebshopItem(routeProps.match.params.routeName)}
                handleItems={handleItems}
                changeQuantity={changeQuantity}
                totalQuantity={totalQuantity}
                updateTotalQuantity={updateTotalQuantity}
                items={items}
              />
            )}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
