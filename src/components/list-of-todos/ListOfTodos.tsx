import React, { ChangeEvent, KeyboardEvent, useState } from "react";

import Checkbox from "../buttons-components/checkbox/Checkbox";
import EditTask from "../buttons-components/edit-task/EditTask";
import Trash from "../buttons-components/trash-basket/Trash";
import Ok from "../buttons-components/ok-btn/Ok";
import Cross from "../buttons-components/cross-btn/Cross";

import styled from "./list-of-todos.module.css";

type ListOfTodosPropsType = {
	id: string;
	title: string;
	isDone: boolean;
	checked: boolean;
	filter: string;
	removeTask: (id: string) => void;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	editTodo: (id: string, title: string) => void;
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const ListOfTodos: React.FC<ListOfTodosPropsType> = ({
	title,
	id,
	isDone,
	checked,
	filter,
	removeTask,
	onChange,
	editTodo,
	onChangeHandler,
	onKeyPressHandler,
}) => {
	
	const [editTask, setEditTask] = useState(false);
	const [value, setValue] = useState(title);
	const [error, setError] = useState(false);
	
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter' && value) {
			editTodo(id, value);
			setEditTask(false);
		} else {
			setError(true);
		}};

	const okBtnkHandler = () => {
		if(value === '') {
			setError(true);
		} else {
			editTodo(id, value);
			setEditTask(false);
		};
	};

	const crossBtnkHandler = () => {
		if(value === '' || value) {
			setEditTask(false);
			setValue(title);
			setError(false);
			} 
		};
	
	const editTaskBtnHandler = () => {
		if(isDone) {
			return
		} else {
			setEditTask(true);
		};
	};

	const trashBtnHandler = () => {
		removeTask(id);
	};

	return (
			<div className={styled.container}>
				{editTask ? (
					<div className={`${checked ? styled.taskIsDone : styled.taskIsNotDone}`}>

						<input 
							value={value} 
							onKeyDown={onKeyDownHandler}
							placeholder={error ? 'Field is required' : ''}
							onChange={(e) => {
							setValue(e.target.value);
							setError(false)
						}} 
							className={`${error ? styled.inputError :  styled.input}`}/>

						<div className={styled.iconsContainer}>
							<Ok 
								onKeyDown={onKeyPressHandler}
								onClick={okBtnkHandler}
						/>
							<Cross onClick={crossBtnkHandler}/>
							</div>
						</div>
							) : (
						<div className={`${checked ? styled.taskIsDone : styled.taskIsNotDone}`}>

						<span className={styled.titleUpdate}>{title}</span>
						
						<div className={styled.iconsContainer}>
							<Checkbox 
								id={id} 
								disabled={editTask}
								onChange={onChangeHandler} 
								checked={isDone}
								/>	
							<EditTask
								onClick={editTaskBtnHandler}
								
								/>
							<Trash 
								onClick={trashBtnHandler}
								/>
						</div>
					</div>						
				)}
			</div>
	);
};

export default ListOfTodos;
