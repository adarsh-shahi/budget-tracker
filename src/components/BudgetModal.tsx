import { ChangeEvent, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { BudgetContext } from "../context/budget";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";
import { REDUCER_ACTION_TYPE } from "../context/budget";
interface BudgetModalProps {
	setModalFalse: () => void;
	color: string;
}

const BudgetModal = ({ setModalFalse }: BudgetModalProps) => {
	const { stateValues, dispatch } = useContext(BudgetContext)!;
	const [inputBudget, setInputBudget] = useState(stateValues.budget);

	const handleSumbit = () => {
		dispatch({
			type: REDUCER_ACTION_TYPE.EDIT_BUDGET,
			payload: {
				budget: inputBudget,
			},
		});
		setModalFalse();
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputBudget(parseInt(event.target.value) || 0);
	};

	return ReactDOM.createPortal(
		<Modal>
			<Card>
				<div className="flex flex-col gap-2">
					<label className="text-lg font-medium" htmlFor="budget-input">
						Set Budget
					</label>
					<input
						value={inputBudget || ""}
						type="number"
						onChange={handleInputChange}
						className="border-2 border-gray-400 px-2 py-1 text-lg focus:border-red-400"
						id="budget-input"
					/>
				</div>
				<div className="self-center flex gap-5">
					<Button
						secondary
						className="border-black font-semibold"
						onClick={() => {
							setModalFalse();
						}}
					>
						Cancel
					</Button>
					<Button
						onClick={handleSumbit}
						primary
						className="bg-green-500 font-semibold"
					>
						Submit
					</Button>
				</div>
			</Card>
		</Modal>,
		document.body
	);
};

export default BudgetModal;
