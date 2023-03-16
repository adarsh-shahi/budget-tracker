import React, { FormEvent, useContext } from "react";
import Button from "./Button";
import { BudgetContext, REDUCER_ACTION_TYPE } from "../context/budget";

const Form = () => {
	const { dispatch } = useContext(BudgetContext)!;

	const handleOnCLick = () => {
		dispatch({
			type: REDUCER_ACTION_TYPE.ADD,
			payload: { id: 23, label: "adarsh", price: 45 },
		});
	};

	const hanleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
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
						<input className="border-2 border-gray-400 px-2 py-1" />
					</div>
					<div className="flex flex-col gap-2">
						<label>Cost</label>
						<input
							type="number"
							className="border-2 border-gray-400 px-2 py-1"
						/>
					</div>
				</div>
				<Button
					onClick={handleOnCLick}
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
