import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    // the varibale newFood stores the array of objects that need to be added to state.
    const newFood = getNewRandomSpicyFood();
//  for the the new array of objects to be added we need to mutate the existing data in teh varibale in the state.
// this is done by creating a new array, creaitn a copy of the original array using the spread operator then lsing the new array to be added
    const newFoodArray= [...foods, newFood];
    // then passing the mutated array to the setter function.(passing a new value, that will result in React to re-render.)
    setFoods(newFoodArray);
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
