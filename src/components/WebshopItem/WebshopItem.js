import { Link } from "react-router-dom";

const WebshopItem = ({ handleItems, name, price, url, routeName }) => {
  return (
    <div className="webshop-item-wrapper">
      <div className="webshop-item">
        <Link to={`/shop/${routeName}`}>
          <img src={url} alt="" />
        </Link>
        <Link to={`/shop/${routeName}`}>
          <p className="item-name">{name}</p>
        </Link>
        <p>Price: ${price}</p>
        <button onClick={() => handleItems(price, name)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default WebshopItem;
