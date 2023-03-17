import React, { useContext, useState } from "react";
import { BudgetContext } from "../context/budget";
import BudgetModal from "./BudgetModal";
import Button from "./Button";
import Label from "./Label";

interface TrackerProps {
	className?: string;
}
const Tracker = ({ className }: TrackerProps) => {
	const {
		stateValues: { budget, remaining, spent },
	} = useContext(BudgetContext)!;

	const finalClasses = "rounded-lg " + className;

	const [modal, setModal] = useState(false);

	const handleEditBudgetModal = () => {
		setModal(true);
	};
	return (
		<div className="flex w-full justify-evenly gap-10 items-center text-lg font-medium">
			<Label className={`bg-green-300 ${finalClasses}`}>
				Remaining: ${remaining}
			</Label>
			<Label className={`bg-red-300 ${finalClasses}`}>Spent: ${spent}</Label>
			<Label
				className={`bg-purple-300 flex items-center justify-between ${finalClasses}`}
			>
				<p>Budget: ${budget}</p>
				<Button
					onClick={handleEditBudgetModal}
					className="bg-purple-700"
					primary
				>
					Edit
				</Button>
				{modal && (
					<BudgetModal
						setModalFalse={() => {
							setModal(false);
						}}
						color="dsiuhf"
					/>
				)}
			</Label>
		</div>
	);
};

export default Tracker;
