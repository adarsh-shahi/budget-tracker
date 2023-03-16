interface ModalProps {
	children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
	return (
		<div className="flex bg-black bg-opacity-25 fixed inset-0 backdrop-blur-sm justify-center items-center">
			{children}
		</div>
	);
};

export default Modal;
