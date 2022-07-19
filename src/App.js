import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import Navbar from "./Pages/Navbar/Navbar";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route
          path="/products/:id"
          element={<ItemDetails></ItemDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
