import { useEffect, useState } from "react";
import {
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
} from "../../redux/services/categoriesApi";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });

  const [editCategory] = useEditCategoryMutation();

  const { id } = useParams();

  const { data, isLoading } = useGetCategoryByIdQuery(id);

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editCategory({
      id,
      ...newCategory,
    });
    nav("/");
  };

  useEffect(() => {
    if (data) {
      setNewCategory({ name: data.name, description: data.description });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        "LOADING..."
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>EDIT CATEGORY</label>
          <br />
          <br />
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
            value={newCategory.name}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="description"
            onChange={(e) =>
              setNewCategory({ ...newCategory, description: e.target.value })
            }
            value={newCategory.description}
          />
          <br />
          <br />
          <button type="submit">EDIT</button>
        </form>
      )}
    </>
  );
};
export default EditCategory;
