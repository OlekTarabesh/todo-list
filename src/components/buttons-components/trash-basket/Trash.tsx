import Button from "../button/Button";
import styled from "./trash.module.css";

import React from "react";

type TrashPropsType = {
	onClick: () => void;
};

const Trash: React.FC<TrashPropsType> = ({ onClick }) => {
	return (
		<div className={styled.deleteButton}>
			<Button onClick={onClick} className={styled.deleteButton} />
		</div>
	);
};

export default Trash;
