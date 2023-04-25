import TodoList from "./components/todo-list/todo-list";
import { useState } from "react";
import { TaskType } from "./global-type";
import styled from "./App.module.css";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: v1(), title: "HTML", isDone: false },
		{ id: v1(), title: "CSS", isDone: false },
		{ id: v1(), title: "JS", isDone: false },
		{ id: v1(), title: "Redux", isDone: true },
	]);

	const [filter, setFilter] = useState("all");
	const [value, setValue] = useState<string>("");

	function changeFilter(value: FilterValuesType) {
		setFilter(value);
	}

	let tasksForTodoList = tasks;
	// сделать функц.
	if (filter === "completed") {
		tasksForTodoList = tasks.filter((t) => t.isDone === true);
	} else if (filter === "active") {
		tasksForTodoList = tasks.filter((t) => t.isDone === false);
	}

	// let tasksForTodoList = tasks;
	// // сделать функц.
	// if (filter === "completed") {
	// 	tasksForTodoList = tasks.filter((t) => t.isDone === true);
	// } else if (filter === "active") {
	// 	tasksForTodoList = tasks.filter((t) => t.isDone === false);
	// }

	const handelInput = (text: string) => {
		setValue(text);
	};

	const addTask = () => {
		const newTask = {
			id: v1(),
			title: value,
			isDone: false,
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

	return (
		<div className={styled.App}>
			<div className={styled.appContainer}>
				<TodoList
					tasks={tasksForTodoList}
					title="My Todo List"
					handelInput={handelInput}
					value={value}
					addTask={addTask}
					changeFilter={changeFilter}
					removeTask={removeTask}
					changeTaskStatus={changeStatus}
					filter={filter}
				/>
			</div>
		</div>
	);
}

export default App;
