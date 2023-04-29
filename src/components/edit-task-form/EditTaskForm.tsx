import { TaskType } from "../../global-type";
import Cross from "../buttons-components/cross-btn/Cross";
import Ok from "../buttons-components/ok-btn/Ok";
import styled from "./edit-task-form.module.css";

import React, { ChangeEvent, useState } from "react";

type EditTaskInputPropsType = {
	tasks: Array<TaskType>;
	id: string;
	value: string;
	placeholder?: string;
	addTask: () => void;
	onClick: () => void;
	onKeyDown: () => void;
	editTodo: (id: string,  title: string) => void;
	editTitleOfTask: (title: string, id: string) => void;
};
const EditTaskInput: React.FC<EditTaskInputPropsType> = ({
	tasks,
	id,
	value,
	addTask,
	onClick,
	onKeyDown,
	editTodo
}) => {
	const [error, setError] = useState<string | null>(null);
	const [inputValue, setInputValue] = useState(value);

	const inputHandler = (text: string) => {
		setInputValue(text);
		console.log(text);
	};

	return (
		<div className={styled.container}>
			<div className={styled.inputAndButtons}>
				<input
					id={id}
					type="text"
					value={inputValue}
					onChange={(e) => inputHandler(e.target.value)}
					onKeyDown={onKeyDown}
					className={`${error ? styled.error : styled.input}`}
				/>
				<div className={styled.buttonsContainer}>
					<Ok onClick={() => addTask()} />
					<Cross onClick={onClick} />
				</div>
				{/* {error && <div className={styled.errorMassage}>{error}</div>} */}
			</div>
		</div>
	);
};

export default EditTaskInput;
