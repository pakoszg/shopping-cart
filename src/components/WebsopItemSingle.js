import { Link } from "react-router-dom";

const WebshopItemSingle = ({ items, webshopItem, handleItems }) => {
  const { name, url, price } = webshopItem;

  const thisItem = items.find((item) => item.name === name);
  console.log(thisItem);

  return (
    <div className="singleItem-wrapper">
      <h1>{name}</h1>
      <img src={url} alt="" />
      <h2>Price: ${price}</h2>
      <h3>quantity:</h3>
      {thisItem !== undefined && <h3>{thisItem.quantity}</h3>}
      <button onClick={() => handleItems(price, name)}>Add to Cart</button>
      <Link to="/webshop">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default WebshopItemSingle;
