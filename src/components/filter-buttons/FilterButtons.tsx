import Button from "../button/Button";
import styled from "./button.module.css";

import React from "react";

type FilterButtonsPropsType = {
	filter: string;
	onAllFilterHandler: () => void;
	onActiveFilterHandler: () => void;
	onCompletedFilterHandler: () => void;
};

const FilterButtons: React.FC<FilterButtonsPropsType> = ({
	filter,
	onAllFilterHandler,
	onActiveFilterHandler,
	onCompletedFilterHandler,
}) => {
	return (
		<div className={styled.container}>
			<Button
				className={`${
					filter === "all" ? styled.active : styled.buttons
				}`}
				onClick={onAllFilterHandler}
			>
				all
			</Button>
			<Button
				className={`${
					filter === "active" ? styled.active : styled.buttons
				}`}
				onClick={onActiveFilterHandler}
			>
				active
			</Button>
			<Button
				className={`${
					filter === "completed" ? styled.active : styled.buttons
				}`}
				onClick={onCompletedFilterHandler}
			>
				completed
			</Button>
		</div>
	);
};

export default FilterButtons;
