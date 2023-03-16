import { createContext, useReducer } from "react";
import React from "react";

export interface ItemType {
	id: number;
	label: string;
	price: number;
}

interface stateType {
	items: ItemType[];
}

const initialState: stateType = {
	items: [],
};

interface BudgetContextType {
	stateValues: stateType;
	dispatch: (action: ReducerAction) => void;
}

const BudgetContext = createContext<BudgetContextType | null>(null);

export const enum REDUCER_ACTION_TYPE {
	ADD,
	DELETE,
}

interface ReducerAction {
	type: REDUCER_ACTION_TYPE;
	payload: ItemType;
}

const reducer = (state: stateType, action: ReducerAction): stateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.ADD:
			return { ...state, items: [...state.items, action.payload] };
		case REDUCER_ACTION_TYPE.DELETE: // do something and return new state
		default:
			throw new Error();
	}
};

interface ProviderProps {
	children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const dataValue: BudgetContextType = {
		stateValues: state,
		dispatch,
	};

	return (
		<BudgetContext.Provider value={dataValue}>
			{children}
		</BudgetContext.Provider>
	);
};

export { Provider, BudgetContext };
