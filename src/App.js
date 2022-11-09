import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  
  return (
    <div className="App">
      <h1>Our Cute Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem info={item} num={index} cart={cart} setCart={setCart}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>See items in your cart:</h2>
      {/* TODO: render a list of items in the cart */}    
			{cart.map(e => <li>{e}</li>)}
        
      </div>
    </div>
  );
}

export default App;
