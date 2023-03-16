import React from "react";

interface LabelProps {
	children: React.ReactNode;
	className?: string;
}

const Label = ({ children, className }: LabelProps) => {
	const finalClasses = "py-6 w-full px-5 " + className;

	return <div className={finalClasses}>{children}</div>;
};

export default Label;
