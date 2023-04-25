import React, { ChangeEvent, KeyboardEvent } from "react";
import styled from "./todo-input.module.css";

type TodoInputPropsType = {
	value: string;
	inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
	error: boolean | null;
	addTaskHandler: () => void;
};

const TodoInput: React.FC<TodoInputPropsType> = ({
	value,
	inputHandler,
	onKeyPressHandler,
	error,
	addTaskHandler,
}) => {
	return (
		<div className={styled.container}>
			<div className={styled.inputAndButton}>
				<input
					type="text"
					placeholder={error ? "Field is required" : "New Task..."}
					value={value}
					onChange={inputHandler}
					onKeyDown={onKeyPressHandler}
					className={`${error ? styled.error : styled.input}`}
				/>
				<button
					onClick={addTaskHandler}
					className={`${
						error ? styled.inputButtonError : styled.inputButton
					}`}
				>
					Add Task
				</button>
				{error && <div className={styled.errorMassage}>{error}</div>}
			</div>
		</div>
	);
};

export default TodoInput;
