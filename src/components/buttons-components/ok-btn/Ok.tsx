import Button from "../button/Button";
import styled from "./ok.module.css";

import React from "react";

type OkPropsType = {
	onClick: () => void;
};
const Ok: React.FC<OkPropsType> = ({ onClick }) => {
	return (
		<div className={styled.ok} onClick={onClick}>
			<Button className={styled.okBtn} />
		</div>
	);
};

export default Ok;
