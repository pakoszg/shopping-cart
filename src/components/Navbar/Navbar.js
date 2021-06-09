import { Link } from "react-router-dom";

const Navbar = ({ totalQuantity, toggleCart }) => {
  console.log();
  console.log(totalQuantity);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/">Homepage</Link>
        <Link to="/webshop">Webshop</Link>

        <div className="sticker">
          <button onClick={() => toggleCart()} className="cartbutton">
            Cart ({totalQuantity})
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
