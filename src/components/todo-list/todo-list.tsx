import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { propsType } from "../../global-type";
import styled from "./todo-list.module.css";
import TodoInput from "../todo-Input/TodoInput";
import ListOfTodos from "../list-of-todos/ListOfTodos";
import FilterButtons from "../buttons-components/filter-buttons/FilterButtons";

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
	// editTodo,
	// editTask,
}) => {
	const [error, setError] = useState<boolean | null>(null);

	return (
		<div className={styled.wrapper}>
			{/* <div className={styled.container}>
				<ListOfTodos
					// value={value}
					tasks={tasks}
					changeTaskStatus={changeTaskStatus}
					removeTask={removeTask}
					// editTodo={editTask}
				/>
			</div> */}
		</div>
	);
};

export default TodoList;
