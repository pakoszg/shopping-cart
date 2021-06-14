import WebshopItem from "../components/WebshopItem";

const Webshop = ({ handleItems, webshopItems }) => {
  return (
    <div className="webshop-wrapper">
      <h1>Kitten Webshop</h1>
      <div className="webshop-items-wrapper">
        {webshopItems.map((item) => (
          <WebshopItem handleItems={handleItems} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Webshop;
