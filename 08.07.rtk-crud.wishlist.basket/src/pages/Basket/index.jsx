import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import {
  clearBasket,
  decreaseBasketItemCount,
  increaseBasketItemCount,
  removeFromBasket,
} from "../../redux/features/basketSlice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.items);

  const dispatch = useDispatch();
  const handleRemoveItem = (category) => {
    dispatch(removeFromBasket(category));
  };
  const handleIncreseItemCount = (category) => {
    dispatch(increaseBasketItemCount(category));
  };
  const handleDecreaseItemCount = (category) => {
    dispatch(decreaseBasketItemCount(category));
  };
  const handleOrderItems = () => {
    dispatch(clearBasket());
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>category name</th>
            <th>category description</th>
            <th>increase</th>
            <th>count</th>
            <th>decrease</th>
          </tr>
        </thead>
        <tbody>
          {basket.length > 0 &&
            basket.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => handleIncreseItemCount(item)}>
                      <FaPlus />
                    </button>
                  </td>
                  <td>{item.count}</td>
                  <td>
                    <button onClick={() => handleDecreaseItemCount(item)}>
                      <FaMinus />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleRemoveItem(item)}>
                      <IoMdCloseCircle />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={() => handleOrderItems()}>ORDER</button>
    </>
  );
};

export default Basket;
