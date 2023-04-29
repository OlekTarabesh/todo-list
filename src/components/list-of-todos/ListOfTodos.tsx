import { FilterValuesType, TaskType } from "../../global-type";
import Checkbox from "../buttons-components/checkbox/Checkbox";
import EditTaskInput from "../edit-task-form/EditTaskInput";
import EditTask from "../buttons-components/edit-task/EditTask";
import FilterButtons from "../buttons-components/filter-buttons/FilterButtons";
import Trash from "../buttons-components/trash-basket/Trash";
import styled from "./list-of-todos.module.css";

import React, { ChangeEvent } from "react";

type ListOfTodosPropsType = {
	tasks: Array<TaskType>;
	filter: string;
	children?: any;
	changeFilter: (value: FilterValuesType) => void;
	changeTaskStatus: (taskId: string, isDone: boolean) => void;
	removeTask: (id: string) => void;
	editAndCancelEditingTodo: (id: string,  title?: string) => void;
	// cancelEditing: (id: string) => void;
};

const ListOfTodos: React.FC<ListOfTodosPropsType> = ({
	tasks,
	filter,
	children,
	changeFilter,
	changeTaskStatus,
	removeTask,
	editAndCancelEditingTodo,
	// cancelEditing
}) => {

	let tasksForTodoList = tasks;
	if (filter === "completed") {
		tasksForTodoList = tasks.filter((t) => t.isDone === true);
	} else if (filter === "active") {
		tasksForTodoList = tasks.filter((t) => t.isDone === false);
	}

	return (
		<>
			<div className={styled.wrapper}>
				<ul className={styled.ulContainer}>
					{tasksForTodoList.map((task) => {
						const onChangeHandler = (
							e: ChangeEvent<HTMLInputElement>
						) => {
							changeTaskStatus(task.id, e.currentTarget.checked);
						};
						const removeTaskHandler = () => {
							removeTask(task.id);
						};
						return task.isEditing ? (
							<EditTaskInput
							tasks={tasks}
							key={task.id}
							id={task.id}
							value={task.title}
							editTodo={editAndCancelEditingTodo}
								// cancelEditing={cancelEditing}
							/>
						) : (
							<li
								key={task.id}
								className={`${
									task.isDone
										? styled.taskTextAndContainerIsDone
										: styled.taskTextAndContainer
								}`}
							>
								{task.title}

								<div className={styled.iconsContainer}>
									<Checkbox
										id={task.id}
										onChange={onChangeHandler}
										checked={task.isDone}
									/>
									<EditTask editTodo={editAndCancelEditingTodo} onClick={() => editAndCancelEditingTodo(task.id, task.title)} />
									<Trash onClick={removeTaskHandler} />
								</div>
							</li>
						);
					})}
					{children}
				</ul>
			</div>
			<FilterButtons 
				filter={filter}
				changeFilter={changeFilter}
			/>
		</>
	);
};

export default ListOfTodos;
