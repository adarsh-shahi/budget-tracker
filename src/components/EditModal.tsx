import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

interface EditModalProps {
	onClose: () => void;
}
const EditModal = ({ onClose }: EditModalProps) => {
	return ReactDOM.createPortal(
		<Modal>
			<Card>
				<div className="flex flex-col gap-2 items-start">
					<label className="text-lg font-medium" htmlFor="">
						Expense
					</label>
					<input
						className="border-2 border-gray-400 px-2 py-1 text-lg focus:border-red-400"
						type="text"
					/>
				</div>
				<div className="flex flex-col gap-2 items-start">
					<label className="text-lg font-medium" htmlFor="">
						Cost
					</label>
					<input
						className="border-2 border-gray-400 px-2 py-1 text-lg focus:border-red-400"
						type="number"
					/>
				</div>
				<div className="self-center flex gap-5">
					<Button
						className="font-medium"
						secondary
						onClick={() => {
							onClose();
						}}
					>
						Cancel
					</Button>
					<Button className="bg-green-600 font-medium" primary>
						Submit
					</Button>
				</div>
			</Card>
		</Modal>,
		document.body
	);
};
export default EditModal;
