import { useState } from "react";
import { clotheList } from "../datas/clotheList";
import ClotheItem from "./ClotheItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = clotheList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  function addToCart(name, price) {
    const currentClotheAdded = cart.find((clothe) => clothe.name === name);
    if (currentClotheAdded) {
      const cartFilteredCurrentClothe = cart.filter(
        (clothe) => clothe.name !== name
      );
      updateCart([
        ...cartFilteredCurrentClothe,
        { name, price, amount: currentClotheAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-clothe-list">
        {clotheList.map(({ id, cover, name, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <ClotheItem cover={cover} name={name} price={price} />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
