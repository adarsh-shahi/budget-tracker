interface ModalProps {
	children: React.ReactNode;
}

const Card = ({ children }: ModalProps) => {
	return (
		<div className="flex flex-col bg-white px-10 py-5 rounded-2xl gap-5 shadow-2xl">
			{children}
		</div>
	);
};

export default Card;
