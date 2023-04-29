import { useState, KeyboardEvent, ChangeEvent } from "react";
import { TaskType } from "./global-type";
import styled from "./App.module.css";
import { v1 } from "uuid";
import TodoInput from "./components/todo-Input/TodoInput";
import ListOfTodos from "./components/list-of-todos/ListOfTodos";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: v1(), title: "HTML", isDone: false, isEditing: false },
		{ id: v1(), title: "CSS", isDone: false, isEditing: false },
		{ id: v1(), title: "JS", isDone: false, isEditing: false },
		{ id: v1(), title: "Redux", isDone: true, isEditing: false },
	]);

	const [filter, setFilter] = useState("all");
	const [value, setValue] = useState<string>("");
	const [error, setError] = useState<boolean | null>(null);

	function changeFilter(value: FilterValuesType) {
		setFilter(value);
	}

	const handelInput = (text: string) => {
		setValue(text);
	};

	const addTask = () => {
		const newTask = {
			id: v1(),
			title: value,
			isDone: false,
			isEditing: false,
		};

		if (newTask.title.trim() === "") {
			return;
		} else {
			let newTasks = [newTask, ...tasks];
			setTasks(newTasks);
			setValue("");
		}
	};

	const removeTask = (id: string) => {
		const filteredTask = tasks.filter((t) => t.id !== id);
		setTasks(filteredTask);
	};

	const changeStatus = (taskId: string, isDone: boolean) => {
		const task = tasks.find((t) => t.id === taskId);
		if (task) {
			task.isDone = !task.isDone;
		}
		setTasks([...tasks]);
	};


	const editTodo = (id: string) => {
		const editingTask = tasks.map((t) =>
			t.id === id
				? {
						...t,
						isEditing: !t.isEditing,
				  }
				: t
		);
		setTasks([...editingTask]);
	};

	const cancelEditing = (id: string) => {
		const canceling = tasks.map((t) =>
			t.id === id
				? {
						...t,
						isEditing: !t.isEditing,
				}
			: t
	);
	setTasks([...canceling]);
	}

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		handelInput(e.target.value);
	};

	const addTaskHandler = () => {
		if (value) {
			addTask();
		} else {
			setError(true);
		}
	};

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null);
		if (e.key === "Enter" && value) {
			addTask();
		}
	};

	// const onAllFilterHandler = () => {
	// 		changeFilter("all");
	// 	};
	// 	const onActiveFilterHandler = () => {
	// 		changeFilter("active");
	// 	};
	// 	const onCompletedFilterHandler = () => {
	// 		changeFilter("completed");
	// 	};
	return (
		<div className={styled.App}>
			<h1 className={styled.title}>{"My Todo List"}</h1>
			<div className={styled.appContainer}>
				<TodoInput
					value={value}
					inputHandler={inputHandler}
					onKeyPressHandler={onKeyPressHandler}
					error={error}
					addTaskHandler={addTaskHandler}
				/>
				<ListOfTodos
					tasks={tasks}
					filter={filter}
					changeTaskStatus={changeStatus}
					removeTask={removeTask}
					changeFilter={changeFilter}
					editTodo={editTodo}
					cancelEditing={cancelEditing}
				/>
			</div>
		</div>
	);
}

export default App;
