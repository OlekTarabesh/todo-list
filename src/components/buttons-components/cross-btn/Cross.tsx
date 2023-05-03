import React from "react";

import Button from "../button/Button";
import styled from "./cross.module.css";

type CrossPropsType = {
	onClick: () => void;
};
const Cross: React.FC<CrossPropsType> = ({ onClick }) => {
	return (
		<div className={styled.cross}>
			<Button onClick={onClick} className={styled.crossBtn} />
		</div>
	);
};

export default Cross;
