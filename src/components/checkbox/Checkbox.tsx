import React from "react";

import styled from "./checkbox.module.css";

type CheckboxPropsType = {
	id: string;
	className: string;
};
const Checkbox: React.FC<CheckboxPropsType> = ({ id, className }) => {
	return (
		<div className={className}>
			<svg
				id={id}
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styled.isDoneSVG}
			>
				<path
					d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z"
					fill="#65C729"
				/>
				<path
					d="M13.7124 6.21248C13.7035 6.22111 13.6952 6.2303 13.6874 6.23998L9.34619 11.7712L6.72993 9.15373C6.55222 8.98813 6.31716 8.89798 6.07428 8.90227C5.83141 8.90655 5.59967 9.00494 5.42791 9.17671C5.25614 9.34847 5.15775 9.5802 5.15347 9.82308C5.14918 10.066 5.23933 10.301 5.40493 10.4787L8.71243 13.7875C8.80154 13.8764 8.90764 13.9465 9.02442 13.9936C9.14119 14.0406 9.26624 14.0636 9.39212 14.0613C9.51799 14.059 9.6421 14.0313 9.75706 13.98C9.87201 13.9286 9.97544 13.8547 10.0612 13.7625L15.0512 7.52498C15.2211 7.34665 15.314 7.1086 15.3098 6.86232C15.3056 6.61603 15.2046 6.38129 15.0288 6.20885C14.8529 6.03641 14.6162 5.94012 14.3698 5.9408C14.1235 5.94148 13.8874 6.03907 13.7124 6.21248Z"
					fill="#65C729"
				/>
			</svg>
		</div>
	);
};

export default Checkbox;
