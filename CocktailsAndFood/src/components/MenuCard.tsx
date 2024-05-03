import { useNavigate } from "react-router-dom";
import { Meal } from "../orderTypes";
import { ActionType, useOrderContext } from "../context/OrderContext";
import StandardButton from "./StandardButton";
import { SpicyChilis } from "./SpicyChilis";
export const MenuCard = ({ meal }: { meal: Meal }) => {
    const navigate = useNavigate();

    const { dispatch } = useOrderContext();

    const handleClick = () => {
        dispatch({ type: ActionType.CREATE_ORDER, payload: meal });
        navigate("/detail");
    };

    return (
        <>
            <div onClick={handleClick} className="flex bg-white md:rounded-2xl shadow-custom-big overflow-hidden h-full cursor-pointer group">
                <div className="w-1/3 h-full overflow-hidden">
                    <img
                        src={meal.imageUrl}
                        className="h-full object-cover object-[0%_50%] w-full group-hover:scale-110 duration-150"
                    />
                </div>
                <div className="flex flex-col justify-between gap-4 w-2/3 p-8 pt-7">
                    <div className="flex flex-col gap-1">
                        <div>
                            <h4 className="font-bold leading-tight -my-1">
                                {meal.title}
                            </h4>
                            <div className="flex gap-3 items-center">
                                <p className="font-semibold my-2 text-sm">
                                    {meal.price.toFixed(2)} kr
                                </p>
                                <SpicyChilis spiciness={meal.spiciness}/>
                            </div>
                        </div>
                        <p className="text-xs">{meal.description}</p>
                    </div>
                    <StandardButton yellow small>
                        Välj
                    </StandardButton>
                </div>
            </div>
        </>
    );
};
