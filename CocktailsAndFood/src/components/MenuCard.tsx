import { useNavigate } from "react-router-dom";
import { Meal } from "../orderTypes";
import { CartModifiers } from "../App";

export const MenuCard = ({
  meal,
  createOrder,
}: {
  meal: Meal;
  createOrder: CartModifiers["createOrder"];
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    createOrder(meal);
    navigate(`/detail`);
  };
  return (
    <>
      <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden h-full">
        <div className="w-1/3 h-full">
          <img src={meal.imageUrl} className="h-full object-cover w-full" />
        </div>
        <div className="flex flex-col justify-between gap-4 w-2/3 p-8">
          <div>
            <h4 className="font-bold">{meal.title}</h4>
            <p className="font-medium my-2 text-sm">
              {meal.price.toFixed(2)} kr
            </p>
            <p className="text-xs">{meal.description}</p>
          </div>
          <button
            className="bg-yellow-400 hover:bg-yellow-300 rounded-3xl w-full self-center py-2 text-sm font-bold"
            onClick={handleClick}
          >
            Välj
          </button>
        </div>
      </div>
    </>
  );
};
