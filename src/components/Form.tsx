import React from "react";
import Button from "./Button";

const Form = () => {
	const handleOnCLick = () => {
		console.log("I was clicked");
	};
	return (
		<div>
			<Button onClick={handleOnCLick} secondary className="bg-orange-500">
				Save
			</Button>
		</div>
	);
};

export default Form;
