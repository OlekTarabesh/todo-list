import React from "react";

// import styled from "./button.module.css";

type ButtonPropsType = {
	onChange?: () => void;
	onClick?: () => void;
	children?: string;
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
