import { useContext } from "react";
import { BudgetContext } from "../context/budget";
import Item from "./Item";
import { ItemType } from "../context/budget";

const ItemsList = () => {
	const context = useContext(BudgetContext)!;

	const renderedItems = context.stateValues.items.map((item: ItemType) => {
		return <Item key={item.id} item={item} />;
	});

	return <div className="w-full border border-gray-400">{renderedItems}</div>;
};

export default ItemsList;
