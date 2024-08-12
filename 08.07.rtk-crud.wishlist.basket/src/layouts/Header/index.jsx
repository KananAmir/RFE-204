import { NavLink } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
const Header = () => {
  const basket = useSelector((state) => state.basket.items);
  const favs = useSelector((state) => state.favorites.items);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Categories</NavLink>
          </li>
          <li>
            <NavLink to={"/add"}>Add Category</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>
              Favorites <sup style={{ color: "red" }}>{favs.length}</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/basket"}>
              {/* Basket <sup style={{ color: "red" }}>{basket.length}</sup> */}
              Basket{" "}
              <sup style={{ color: "red" }}>
                {basket.reduce((sum, item) => sum + item.count, 0)}
              </sup>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
