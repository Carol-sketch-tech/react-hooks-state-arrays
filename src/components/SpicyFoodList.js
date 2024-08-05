import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy]=useState("All")

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
    <li key={food.id} onClick={()=>handleLiClick(food.id)} >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  // function that whena list of foods rndered int he app is clicked on the that list is removed.
  // /we have used the .filter method .filter()

  // REMOVING ELEMENTS IN AN ARRAY.
   function handleLiClick (id){
    const newFoodArray = foods.filter((food)=> food.id !== id);
    setFoods(newFoodArray);
  }
  // calling .filter will return a new array based on which elemetn match our crteria in the callbakc function.
  // so if in our callback function in .filter to look for all foods except the number were tring to remove, we will get a shortened list of foods.

// to update an element in an array we ise the .map method that returns the same length array but with the elements updated.it is done as follows 

// UPDATING ELEMENTS IN AN ARRAY
function handleLiClick(id){
  const newFoodArray = foods.map((food)=> {
    if (food.id === id){
      return {
        ...food, heatLevel: food.heatLevel + 1,
      };
    } else { return food;}
  })
  setFoods(newFoodArray);
}
// to breakdown these steps-
// .map - williterate through the array and return a new array
// whatever value is returned by the calback function that we pass to .map will be adde to this new array
// if the ID of the food were iterating ever matched the ID of food were updating rturn a new food object 
// with the heat level incremanen tby 1
// otherwise retur th original object

// working with multiple state variables
// call the useState() function witht he variable and setter function.with value of the set variable being "All"
// then create a function that will update the setter function

 const foodsToDisplay = foods.filter((food)=>{
  if(filterBy === "All"){
    return true;
  } 
  else{return food.cuisine === filterBy}
 })
function handleFilterChange(event){
  setFilterBy(event.target.value);
}
const fooDList = foodsToDisplay.map((food)=> (<li key={food.id} onClick={()=> handleLiClick(food.id)}>
  {food.name}| Heat :{food.heatLevel}|Cuisine:{food.cuisine}
</li>));

return (
  <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name = "filter" onChange={handleFilterChange}>
        <options value="All">All</options>
        <options value="American">American</options>
        <options value="Sichuan">Sichuan</options>
        <options value="Thai">Thai</options>
        <options value="Mexican">Mexican</options>
      </select>
    </div>
  );
}

export default SpicyFoodList;

