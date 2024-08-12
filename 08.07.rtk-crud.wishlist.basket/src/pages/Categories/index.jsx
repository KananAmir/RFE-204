import { Link } from "react-router-dom";

import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/features/favoritesSlice";
import { addToBasket } from "../../redux/features/basketSlice";
import { useState } from "react";
import {
  useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
} from "../../redux/services/categoriesApi";

const Categories = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  const [deleteCategory, deleteResponse] = useDeleteCategoryByIdMutation();

  const favorites = useSelector((state) => state.favorites.items);
  const basket = useSelector((state) => state.basket.items);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await deleteCategory(id);
  };

  const handleAddToFavs = (category) => {
    dispatch(addToFavorites(category));
  };
  const handleRemoveFromFavs = (category) => {
    dispatch(removeFromFavorites(category));
  };
  const handleBasket = (category) => {
    dispatch(addToBasket(category));
    console.log(basket);
  };

  const filteredCategories = data?.filter(
    (category) =>
      category.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <p>LOADING...</p>;
  if (error) return <p>Error: {error.error}</p>;

  return (
    <div>
      <h1>Categories List</h1>
      <input
        type="search"
        placeholder="Search categories"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: "1rem 0", padding: "0.5rem" }}
      />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            filteredCategories.map((q) => {
              return (
                <tr key={q.id}>
                  <td>{q.id}</td>
                  <td>{q.name}</td>
                  <td>{q.description}</td>

                  <td>
                    <Link to={`/${q.id}`}>
                      <FaInfoCircle />
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(q.id)}
                      style={{ color: "red" }}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/add/${q.id}`}
                      style={{ color: "green", marginLeft: "10px" }}
                    >
                      <FaEdit />
                    </Link>
                  </td>

                  <td>
                    <button onClick={() => handleBasket(q)}>
                      <FaShoppingCart style={{ color: "teal" }} />
                    </button>
                  </td>
                  <td>
                    {favorites.some((category) => category.id === q.id) ? (
                      <button onClick={() => handleRemoveFromFavs(q)}>
                        <FaHeart style={{ color: "red" }} />
                      </button>
                    ) : (
                      <button onClick={() => handleAddToFavs(q)}>
                        <FaRegHeart style={{ color: "red" }} />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
