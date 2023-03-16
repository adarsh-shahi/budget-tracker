import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	primary?: boolean;
	secondary?: boolean;
	onClick?: () => void;
}

const Button = ({
	children,
	className,
	primary,
	secondary,
	onClick,
}: ButtonProps) => {
	let finalClasses = " ";

	if (primary)
		finalClasses = "bg-blue-600 px-4 py-1 text-white text-md rounded-2xl";
	if (secondary)
		finalClasses = "bg-white px-4 py-1 border-2 border-blue-600 rounded-2xl";

	finalClasses = finalClasses + " shadow-2xl " + className;

	return (
		<button onClick={onClick} className={finalClasses}>
			{children}
		</button>
	);
};

export default Button;
