import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Items from "./data";

const allCategories = ["all", ...new Set(Items.map((item) => item.category))];

console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(Items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(Items);
      return;
    }
    const newItems = Items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
