import React from "react";

const Search = () => {
	return (
		<div className="w-full flex flex-col gap-3">
			<div className="text-3xl font-small">Expenses</div>
			<input
				className="border-2 border-gray-500 w-3/4 px-2 py-1"
				placeholder="Type to search"
			/>
		</div>
	);
};

export default Search;
