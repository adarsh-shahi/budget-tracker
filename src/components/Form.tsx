import React, { ChangeEvent, FormEvent, useContext, useReducer } from "react";
import Button from "./Button";
import { BudgetContext, REDUCER_ACTION_TYPE } from "../context/budget";

const enum REDUCER_ACTION_TYPE_FORM {
	EXPENSE,
	COST,
}

interface StateType {
	expense: string;
	cost: number;
}

const initialValue: StateType = {
	expense: "",
	cost: 0,
};

interface ReducerAction {
	type: REDUCER_ACTION_TYPE_FORM;
	payload: StateType;
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE_FORM.EXPENSE:
			return { ...state, expense: action.payload.expense };
		case REDUCER_ACTION_TYPE_FORM.COST:
			return { ...state, cost: action.payload.cost };
		default:
			throw new Error("unhandlled action type");
	}
};

const randomNumber = () => Math.floor(Math.random() * 999999);

const Form = () => {
	const { dispatch: addDispatch } = useContext(BudgetContext)!;

	const [state, dispatch] = useReducer(reducer, initialValue);

	const handleExpenseInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTION_TYPE_FORM.EXPENSE,
			payload: {
				expense: event.target.value,
				cost: state.cost,
			},
		});
	};

	const handleCostInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTION_TYPE_FORM.COST,
			payload: {
				expense: state.expense,
				cost: parseInt(event.target.value) || 0,
			},
		});
	};

	const hanleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		addDispatch({
			type: REDUCER_ACTION_TYPE.ADD,
			payload: {
				item: {
					id: randomNumber(),
					label: state.expense,
					price: state.cost,
				},
			},
		});
		state.expense = "";
		state.cost = 0;
	};

	return (
		<div>
			<div className="text-4xl font-small mb-5">Add Expense</div>
			<form
				onSubmit={hanleFormSubmit}
				className="flex flex-col gap-6 items-start"
			>
				<div className="flex gap-10">
					<div className="flex flex-col gap-2">
						<label>Name</label>
						<input
							value={state.expense}
							onChange={handleExpenseInputChange}
							type="text"
							className="border-2 border-gray-400 px-2 py-1"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label>Cost</label>
						<input
							value={state.cost || ""}
							onChange={handleCostInputChange}
							type="number"
							className="border-2 border-gray-400 px-2 py-1"
						/>
					</div>
				</div>
				<Button
					secondary
					className="bg-orange-500 font-semibold text-lg border-4 hover:bg-blue-500 hover:text-white hover:border-blue-500"
				>
					Save
				</Button>
			</form>
		</div>
	);
};

export default Form;
