import { TaskType } from "../../global-type";
import styled from "./list-of-todos.module.css";

import React, { ChangeEvent } from "react";

type ListOfTodosPropsType = {
	tasks: Array<TaskType>;
	changeTaskStatus: (taskId: string, isDone: boolean) => void;
	removeTask: (id: string) => void;
};

const ListOfTodos: React.FC<ListOfTodosPropsType> = ({
	tasks,
	changeTaskStatus,
	removeTask,
}) => {
	return (
		<div>
			<ul>
				{tasks.map((task) => {
					const onChangeHandler = (
						e: ChangeEvent<HTMLInputElement>
					) => {
						changeTaskStatus(task.id, e.currentTarget.checked);
					};
					return (
						<li
							key={task.id}
							className={`${
								task.isDone ? styled.isDone : styled.nothing
							}`}
						>
							<input
								type="checkbox"
								onChange={onChangeHandler}
								checked={task.isDone}
							/>
							{task.title}
							<button onClick={() => removeTask(task.id)}>
								x
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ListOfTodos;
