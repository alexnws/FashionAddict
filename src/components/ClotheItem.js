import "../styles/ClotheItem.css";

function handleClick(ClotheName) {
  alert(`Vous voulez acheter 1 ${ClotheName}? Très bon choix !`);
}

function ClotheItem({ cover, name, price }) {
  return (
    <li className="clothe-item" onClick={() => handleClick}>
      <span className="clothe-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div></div>
    </li>
  );
}

export default ClotheItem;
