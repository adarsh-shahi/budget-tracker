import React, { useState } from "react";
import Button from "./Button";
import { MdClear, MdModeEdit } from "react-icons/md";
import EditModal from "./EditModal";

interface ItemProps {
	item: { id: number; label: string; price: number };
}
const Item = ({ item }: ItemProps) => {
	const [isEditModal, setIsEditModal] = useState(false);

	const handleOnEdit = () => {
		setIsEditModal(true);
	};

	const closeEditModal = () => {
		setIsEditModal(false);
	};

	return (
		<div className="flex justify-between border border-gray-400 px-5 py-3">
			<div className="text-lg">{item.label}</div>
			<div className="flex items-center gap-4">
				<Button primary className="cursor-default bg-purple-600 font-medium">
					{item.price}
				</Button>
				<MdClear className="rounded-full border-2 border-red-500 text-xl cursor-pointer" />
				<MdModeEdit
					onClick={handleOnEdit}
					className="rounded border-2 border-blue-500 text-xl cursor-pointer"
				/>
				{isEditModal && <EditModal onClose={closeEditModal} />}
			</div>
		</div>
	);
};

export default Item;
