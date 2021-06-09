import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({
  items,
  toggleCart,
  changeQuantity,
  deleteItem,
  totalQuantity,
  updateTotalQuantity,
  totalPrice,
  updateTotalPrice,
  webshopItems,
}) => {
  const sortedItems = items.sort(function sortObjects(a, b) {
    return a.id - b.id;
  });

  const findWebshopItem = (name) =>
    webshopItems.find((item) => item.name === name);

  useEffect(() => {
    updateTotalQuantity();
  }, [totalQuantity, updateTotalQuantity]);

  useEffect(() => {
    updateTotalPrice();
  });

  console.log("CART TOTALPRICE", totalPrice);

  const cartList = sortedItems.map((obj) => {
    const route = findWebshopItem(obj.name).routeName;
    return (
      <div className="cart-item">
        <Link to={`/shop/${route}`} onClick={() => toggleCart()}>
          <p>{obj.name}</p>
        </Link>

        <button
          className="sign"
          onClick={() => changeQuantity(obj.name, obj.quantity - 1)}
        >
          -
        </button>
        <input
          type="text"
          value={obj.quantity}
          onChange={(e) => changeQuantity(obj.name, e.target.value)}
        />
        <button
          className="sign"
          onClick={() => changeQuantity(obj.name, obj.quantity + 1)}
        >
          +
        </button>
        <p>Price/piece: ${obj.price}</p>
        <p>Total price: ${obj.price * obj.quantity}</p>
        <button onClick={() => deleteItem(obj.name)}>Delete All</button>
      </div>
    );
  });

  const cartListEmpty = <p>The cart is empty :(</p>;

  return (
    <div className="cart">
      <div className="cart-wrapper">
        <h1>Cart</h1>
        <div className="cart-items-wrapper">
          {totalQuantity === 0 ? cartListEmpty : cartList}
        </div>
        <p className="totalPrice">Total Price: ${totalPrice}</p>
        <button>Checkout</button>
        <button onClick={() => toggleCart()}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Cart;
