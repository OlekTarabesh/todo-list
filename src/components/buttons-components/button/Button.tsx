import React from "react";

import { FilterValuesType } from "../../../global-type";

type ButtonPropsType = {
	onKeyDown?: any;
	children?: any;
	className: string;
	disabled?: boolean;
	onChange?: () => void;
	onClick?: () => void;
	editTodo?: (id: string, taska: string) => void;
	changeFilter?: (value: FilterValuesType) => void;

};

const Button: React.FC<ButtonPropsType> = ({
	onClick,
	onChange,
	onKeyDown,
	children,
	className,
}) => {
	return (
		<button onKeyDown={onKeyDown} disabled={false} onChange={onChange} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
