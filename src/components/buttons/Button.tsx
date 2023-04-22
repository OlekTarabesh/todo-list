import styled from "./button.module.css";

import React from "react";

type ByttonPropsType = {
	filter: string;
	onAllFilterHandler: () => void;
	onActiveFilterHandler: () => void;
	onCompletedFilterHandler: () => void;
};

const Button: React.FC<ByttonPropsType> = ({
	filter,
	onAllFilterHandler,
	onActiveFilterHandler,
	onCompletedFilterHandler,
}) => {
	return (
		<div>
			<button
				className={`${filter === "all" ? styled.active : ""}`}
				onClick={onAllFilterHandler}
			>
				all
			</button>
			<button
				className={`${filter === "active" ? styled.active : ""}`}
				onClick={onActiveFilterHandler}
			>
				active
			</button>
			<button
				className={`${filter === "completed" ? styled.active : ""}`}
				onClick={onCompletedFilterHandler}
			>
				completed
			</button>
		</div>
	);
};

export default Button;
