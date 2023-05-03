import { TaskType } from "../../global-type";
import Cross from "../buttons-components/cross-btn/Cross";
import Ok from "../buttons-components/ok-btn/Ok";
import styled from "./edit-task-form.module.css";

import React, { useState } from "react";

type EditTaskInputPropsType = {
	tasks: Array<TaskType>;
	id: string;
	value: string;
	editTodo: (id: string) => void;
};
const EditTaskInput: React.FC<EditTaskInputPropsType> = ({
	tasks,
	id,
	value,
	editTodo,
}) => {
	const [error, setError] = useState<string | null>(null);
	const [inputValue, setInputValue] = useState(value);

	const inputHandler = (text: string) => {
		setInputValue(text);
	};

	return (
		<div className={styled.container}>
			<div className={styled.inputAndButtons}>
				<input
					id={id}
					type="text"
					value={inputValue}
					onChange={(e) => inputHandler(e.target.value)}
					className={`${error ? styled.error : styled.input}`}
				/>
				<div className={styled.buttonsContainer}>
					<Ok onClick={() => {}} />
					<Cross onClick={() => {}} />
				</div>
			</div>
		</div>
	);
};

export default EditTaskInput;
