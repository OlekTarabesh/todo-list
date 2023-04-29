export type FilterValuesType = "all" | "active" | "completed";

export type TaskType = {
	id: string;
	title: string;
	isDone: boolean;
	isEditing: boolean;
};

export type propsType = {
	title: string;
	tasks: Array<TaskType>;
	value: string;
	filter: string;
	addTask: () => void;
	handelInput: (text: string) => void;
	changeFilter: (value: FilterValuesType) => void;
	removeTask: (id: string) => void;
	changeTaskStatus: (taskId: string, isDone: boolean) => void;
	editTask: () => void;
};
