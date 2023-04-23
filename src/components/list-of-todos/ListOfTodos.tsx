import { TaskType } from "../../global-type";
import Button from "../button/Button";
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
		<div className={styled.wrapper}>
			<ul className={styled.ulContainer}>
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
								task.isDone
									? styled.taskTextAndContainerIsDone
									: styled.taskTextAndContainer
							}`}
						>
							{task.title}
							<div className={styled.iconsContainer}>
								<div className={styled.checkIsDoneContainer}>
									<input
										id="check"
										type="checkbox"
										onChange={onChangeHandler}
										checked={task.isDone}
										className={styled.checkIsDone}
									/>
									<label htmlFor="check" />
								</div>
								<Button
									onClick={() => removeTask(task.id)}
									className={styled.deleteButton}
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ListOfTodos;
