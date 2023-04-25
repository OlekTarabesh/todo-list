import Button from "../button/Button";
import styled from "./edit-task.module.css";

import React from "react";

type EditTaskPropsType = {
	onClick: () => void;
};
const EditTask: React.FC<EditTaskPropsType> = ({ onClick }) => {
	return (
		<div className={styled.editTask}>
			<Button onClick={onClick} className={styled.editTaskButton} />
		</div>
	);
};

export default EditTask;
