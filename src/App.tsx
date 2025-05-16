import { useRef, useState } from "react";
import "./App.css";
import { CategoryColumn } from "./components/category-column";
import type { List } from "./types/list";

const INITIAL_ITEMS: List[] = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];

// ----------------------------------------------------------------------

function App() {
  const [lists, setLists] = useState<List[]>(INITIAL_ITEMS);

  const [fruits, setFruits] = useState<List[]>([]);
  const [vegetables, setVegetables] = useState<List[]>([]);

  // ----------------------------------------------------------------------

  const timeouts = useRef<Record<string, number>>({});

  // ----------------------------------------------------------------------

  const handleClickItem = (list: List) => {
    setLists((prevState) =>
      prevState.filter((item) => item.name !== list.name)
    );
    if (list.type === "Fruit") setFruits((prevState) => [...prevState, list]);
    else setVegetables((prevState) => [...prevState, list]);

    timeouts.current[list.name] = setTimeout(() => {
      handleClickReturnToList(list);
    }, 5000);
  };

  const handleClickReturnToList = (list: List) => {
    clearTimeout(timeouts.current[list.name]);

    setLists((prevState) => [...prevState, list]);
    if (list.type === "Fruit")
      setFruits((prevState) =>
        prevState.filter((item) => item.name !== list.name)
      );
    else
      setVegetables((prevState) =>
        prevState.filter((item) => item.name !== list.name)
      );
  };

  // ----------------------------------------------------------------------

  return (
    <>
      <div className="container">
        <CategoryColumn lists={lists} onClick={handleClickItem} />
        <CategoryColumn
          title="Fruit"
          lists={fruits}
          onClick={handleClickReturnToList}
        />
        <CategoryColumn
          title="Vegetable"
          lists={vegetables}
          onClick={handleClickReturnToList}
        />
      </div>
    </>
  );
}

export default App;
