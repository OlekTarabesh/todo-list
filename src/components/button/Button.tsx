import { TaskType } from "../../global-type";
import styled from "./button.module.css";

import React from "react";

type ButtonPropsType = {
	onClick: () => void;
	children?: string;
	className: any;
};

const Button: React.FC<ButtonPropsType> = ({
	onClick,
	// children,
	className,
}) => {
	return <button className={className} onClick={onClick}></button>;
};

export default Button;
