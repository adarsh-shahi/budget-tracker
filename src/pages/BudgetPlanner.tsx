import React from "react";
import Form from "../components/Form";
import ItemsList from "../components/ItemsList";
import Search from "../components/Search";
import Tracker from "../components/Tracker";
import { Provider } from "../context/budget";

const BudgetPlanner = () => {
	return (
		<div className="my-10 mx-auto max-w-7xl flex flex-col gap-10">
			<div className="text-5xl font-medium">My Budget Planner</div>
			<Provider>
				<Tracker />
				<Search />
				<ItemsList />
				<Form />
			</Provider>
		</div>
	);
};

export default BudgetPlanner;
