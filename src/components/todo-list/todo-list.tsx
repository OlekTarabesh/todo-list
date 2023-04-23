import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { propsType } from "../../global-type";
import styled from "./todo-list.module.css";
import TodoInput from "../TodoInput/TodoInput";
import ListOfTodos from "../list-of-todos/ListOfTodos";
import FilterButtons from "../filter-buttons/FilterButtons";

const TodoList: React.FC<propsType> = ({
	tasks,
	title,
	value,
	filter,
	addTask,
	handelInput,
	changeFilter,
	removeTask,
	changeTaskStatus,
}) => {
	const [error, setError] = useState<boolean | null>(null);

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		handelInput(e.target.value);
	};
	const addTaskHandler = () => {
		if (value) {
			addTask();
		} else {
			setError(true);
		}
	};
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null);
		if (e.key === "Enter" && value) {
			addTask();
		}
	};

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
		<div className={styled.wrapper}>
			<div className={styled.container}>
				<h1 className={styled.title}>{title}</h1>
				<TodoInput
					value={value}
					inputHandler={inputHandler}
					onKeyPressHandler={onKeyPressHandler}
					error={error}
					addTaskHandler={addTaskHandler}
				/>
				<ListOfTodos
					tasks={tasks}
					changeTaskStatus={changeTaskStatus}
					removeTask={removeTask}
				/>
				<FilterButtons
					filter={filter}
					// сделать одной функц.
					onAllFilterHandler={onAllFilterHandler}
					onActiveFilterHandler={onActiveFilterHandler}
					onCompletedFilterHandler={onCompletedFilterHandler}
				/>
			</div>
		</div>
	);
};

export default TodoList;
