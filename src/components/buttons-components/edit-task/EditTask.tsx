import Button from "../button/Button";
import styled from "./edit-task.module.css";

import React from "react";

type EditTaskPropsType = {
	editTodo: (id: string, title: string) => void;
	onClick: () => void;
};
const EditTask: React.FC<EditTaskPropsType> = ({ onClick, editTodo }) => {
	return (
		<div>
			<Button editTodo={editTodo} onClick={onClick} className={styled.editTaskButton} />
		</div>
	);
};

export default EditTask;
