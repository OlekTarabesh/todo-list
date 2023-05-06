import { FilterValuesType, TaskType } from "../../../global-type";
import Button from "../button/Button";
import styled from "./button.module.css";

type FilterButtonsPropsType = {
	filter: string;
	filteredTasks: Array<TaskType>;
	changeFilter: (value: FilterValuesType) => void;
};

const FilterButtons: React.FC<FilterButtonsPropsType> = ({
	filter,
	filteredTasks,
	changeFilter
}) => {

	const onAllFilterHandler = () => {
		changeFilter("all");
	};
	const onActiveFilterHandler = () => {
		changeFilter("active");
	};
	const onCompletedFilterHandler = () => {
		changeFilter("completed");
	};
	
	return (
		<div className={styled.container}>
			<Button
				onClick={ onAllFilterHandler}
				className={`${filter === "all" ? styled.active : styled.buttons}`}
			>
				All
			</Button>
			<Button
				onClick={onActiveFilterHandler}
				className={`${filter === "active" ? styled.active : styled.buttons}`}
			>
				Active
			</Button>
			<Button
				onClick={onCompletedFilterHandler}
				className={`${filter === "completed" ? styled.active : styled.buttons}`}
			>
				Completed
			</Button>
		</div>
	);
};

export default FilterButtons;
