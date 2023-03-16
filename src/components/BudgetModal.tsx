import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

interface BudgetModalProps {
	setModalFalse: () => void;
	color: string;
}

const BudgetModal = ({ setModalFalse }: BudgetModalProps) => {
	return ReactDOM.createPortal(
		<Modal>
			<Card>
				<div className="flex flex-col gap-2">
					<label className="text-lg font-medium" htmlFor="budget-input">
						Set Budget
					</label>
					<input
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
					<Button primary className="bg-green-500 font-semibold">
						Submit
					</Button>
				</div>
			</Card>
		</Modal>,
		document.body
	);
};

export default BudgetModal;
