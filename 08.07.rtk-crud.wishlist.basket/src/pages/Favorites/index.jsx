import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { removeFromFavorites } from "../../redux/features/favoritesSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);

  const dispatch = useDispatch();
  const handleRemoveFromFavs = (category) => {
    dispatch(removeFromFavorites(category));
  };
  return (
    <ul>
      {favorites.length > 0 &&
        favorites.map((c) => {
          return (
            <li key={c.id}>
              <span>
                {c.name}{" "}
                <button onClick={() => handleRemoveFromFavs(c)}>
                  <FaHeart style={{ color: "red" }} />
                </button>
              </span>
            </li>
          );
        })}
    </ul>
  );
};

export default Favorites;
