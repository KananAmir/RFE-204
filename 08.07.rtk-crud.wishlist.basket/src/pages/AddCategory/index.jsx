import { useState } from "react";
import { usePostCategoryMutation } from "../../redux/services/categoriesApi";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [newCategory, setNewcategory] = useState({ name: "", description: "" });

  const [postcategory] = usePostCategoryMutation();

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newCategory);
    await postcategory(newCategory);
    nav("/");
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>ADD CATEGORY</label>
      <br />
      <br />
      <input
        type="text"
        placeholder="name"
        onChange={(e) =>
          setNewcategory({ ...newCategory, name: e.target.value })
        }
        value={newCategory.name}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) =>
          setNewcategory({ ...newCategory, description: e.target.value })
        }
        value={newCategory.description}
      />
      <br />
      <br />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddCategory;
