import React from "react";
import { FilterValuesType } from "../../../global-type";

// import styled from "./button.module.css";

type ButtonPropsType = {
	onChange?: () => void;
	onClick?: () => void;
	editTodo?: (id: string, taska: string) => void;
	changeFilter?: (value: FilterValuesType) => void;
	children?: any;
	className: string;
};

const Button: React.FC<ButtonPropsType> = ({
	onClick,
	onChange,
	children,
	className,
}) => {
	return (
		<button onChange={onChange} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
