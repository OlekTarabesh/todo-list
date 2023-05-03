import React from "react";

import Button from "../button/Button";
import styled from "./ok.module.css";

type OkPropsType = {
	onClick: (e: any) => void;
	onKeyDown?: any;
};
const Ok: React.FC<OkPropsType> = ({ onClick, onKeyDown }) => {
	return (
		<div className={styled.ok} onClick={onClick} >
			<Button onKeyDown={onKeyDown} className={styled.okBtn} />
		</div>
	);
};

export default Ok;
