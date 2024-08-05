import React from "react";
import SpicyFoodList from "./SpicyFoodList";

function App() {
  return (
    <div>
      <h3>SpicyFoodList</h3>
      <SpicyFoodList />
    </div>
  );
}

export default App;
// removing elements from and ar ray
// anpther feature when a user clicks on a food that food is removed from the list.
// first well nede to add click handlers to the <li> elements and pass an id of rthe fod were trying to remove.