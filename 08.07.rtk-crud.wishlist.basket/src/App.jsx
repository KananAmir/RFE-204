import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";
import Header from "./layouts/Header";
import Favorites from "./pages/Favorites";
import Basket from "./pages/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/:id" element={<CategoryDetails />} />
          <Route path="/add" element={<AddCategory />} />
          <Route path="/add/:id" element={<EditCategory />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
