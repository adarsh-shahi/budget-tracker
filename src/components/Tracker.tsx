import React, { useState } from "react";
import BudgetModal from "./BudgetModal";
import Button from "./Button";
import Label from "./Label";

interface TrackerProps {
	className?: string;
}
const Tracker = ({ className }: TrackerProps) => {
	const finalClasses = "rounded-lg " + className;

	const [modal, setModal] = useState(false);

	const handleEditBudgetModal = () => {
		setModal(true);
	};
	return (
		<div className="flex w-full justify-evenly gap-10 items-center">
			<Label className={`bg-green-300 ${finalClasses}`}>Remaining: $1000</Label>
			<Label className={`bg-red-300 ${finalClasses}`}>Spent: $500</Label>
			<Label
				className={`bg-purple-300 flex items-center justify-between ${finalClasses}`}
			>
				<p>Budget: $1500</p>
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
