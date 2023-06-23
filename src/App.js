import { useEffect } from "react";
import Drinks from "./components/drinks/Drinks";
import Bill from "./components/bill/Bill";
import { useDispatch, useSelector } from "react-redux";
import { setDrinks } from "./feature/drinksSlice";

function App() {

  const drinks = useSelector((state) => state.drinksData.drinksData);
  const dispatch = useDispatch();

  useEffect(() => {

    if (localStorage.getItem("drinksLocalStorage")) {
      const drinksLocalStorage = JSON.parse(localStorage.getItem("drinksLocalStorage"));
      dispatch(setDrinks(drinksLocalStorage));
    } else console.log("pas de liste");
    
  }, []);

  useEffect(() => {

    if (drinks.length > 0) localStorage.setItem("drinksLocalStorage", JSON.stringify(drinks));
    console.log(drinks)

  }, [drinks]);

  return (
    <div className="main">
      <div className="main-container">
        <Drinks />
        <Bill />
      </div>
    </div>
  );
}

export default App;
