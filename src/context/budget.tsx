import { createContext, useReducer } from "react";
import React from "react";

export interface ItemType {
	id: number;
	label: string;
	price: number;
}

interface stateType {
	items: ItemType[];
	budget: number;
	spent: number;
	remaining: number;
}

const initialState: stateType = {
	items: [],
	budget: 500,
	spent: 0,
	remaining: 500,
};

interface BudgetContextType {
	stateValues: stateType;
	dispatch: (action: ReducerAction) => void;
}

const BudgetContext = createContext<BudgetContextType | null>(null);

export const enum REDUCER_ACTION_TYPE {
	ADD,
	DELETE,
	EDIT_BUDGET,
}

interface actionPayloadType {
	item?: ItemType;
	budget?: number;
}

interface ReducerAction {
	type: REDUCER_ACTION_TYPE;
	payload: actionPayloadType;
}

const reducer = (state: stateType, action: ReducerAction): stateType => {
	console.log(typeof action);
	switch (action.type) {
		case REDUCER_ACTION_TYPE.ADD:
			return {
				...state,
				items: [...state.items, action.payload?.item!],
				spent: state.spent + action.payload.item?.price!,
				remaining: state.remaining - action.payload.item?.price!,
			};

		case REDUCER_ACTION_TYPE.DELETE:
			const itemToBeDeleted = state.items.find(
				(item) => item.id === action.payload.item?.id
			);

			return {
				...state,
				items: state.items.filter(
					(item) => item.id !== action.payload?.item?.id
				),
				remaining: state.remaining + itemToBeDeleted?.price!,
				spent: state.spent - itemToBeDeleted?.price!,
			};
		case REDUCER_ACTION_TYPE.EDIT_BUDGET:
			return {
				...state,
				budget: action.payload.budget!,
				remaining: action.payload.budget! - state.spent,
			};
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
