import { useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../redux/services/categoriesApi";

const CategoryDetails = () => {
  const { id } = useParams();
  const { data: category, isLoading } = useGetCategoryByIdQuery(id);
  console.log(category);
  return (
    <div>
      {isLoading ? (
        "LOADING ..."
      ) : (
        <div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;
