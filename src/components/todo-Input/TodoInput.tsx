import React, { ChangeEvent, KeyboardEvent } from "react";

import Button from "../buttons-components/button/Button";

import styled from "./todo-input.module.css";

type TodoInputPropsType = {
	id: string;
	value: string;
	error: boolean | null;
	inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
	addTaskHandler: () => void;
};

const TodoInput: React.FC<TodoInputPropsType> = ({
	id,
	value,
	error,
	inputHandler,
	onKeyPressHandler,
	addTaskHandler,
}) => {
	return (
		<div className={styled.container}>
			<div className={styled.inputAndButton}>
				<input
					id={id}
					type="text"
					placeholder={error ? "Field is required" : "New Task..."}
					value={value}
					onChange={inputHandler}
					onKeyDown={onKeyPressHandler}
					className={`${error ? styled.error : styled.input}`}
				/>
				
				<Button

					onClick={addTaskHandler}
					className={`${
						error ? styled.inputButtonError : styled.inputButton
					}`}
				>
					Add Task
				</Button>
				{error && <div className={styled.errorMassage}>{error}</div>}
			</div>
		</div>
	);
};

export default TodoInput;
