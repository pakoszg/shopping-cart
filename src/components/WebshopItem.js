import { Link } from "react-router-dom";

const WebshopItem = ({ handleItems, name, price, url, routeName }) => {
  return (
    <div className="item-wrapper">
      <div className="item">
        <Link to={`/shop/${routeName}`}>
          <div className="item-img-wrapper-outer">
            <div className="item-img-wrapper">
              <img src={url} alt="" />
            </div>
          </div>
        </Link>
        <Link to={`/shop/${routeName}`}>
          <h3 className="item-name">{name}</h3>
        </Link>
        <p>Price: ${price}</p>
        <button onClick={() => handleItems(price, name)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default WebshopItem;
