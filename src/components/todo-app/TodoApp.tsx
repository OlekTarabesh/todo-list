import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'


import TodoInput from '../todo-Input/TodoInput'
import ListOfTodos from '../list-of-todos/ListOfTodos';
import FilterButtons from '../buttons-components/filter-buttons/FilterButtons';

import { FilterValuesType, TaskType } from '../../global-type';
import { v1 } from 'uuid';
import styled from './todo-app.module.css'

type TodoAppPropsType = {};



const TodoApp: React.FC<TodoAppPropsType> = () => {
	
	const getLocalstorage = () => {
		let taska = window.localStorage.getItem("tasks");

		console.log(taska);
		if(taska) {
			return (taska = JSON.parse(localStorage.getItem('tasks') || '[]'));
		} else { 
			return [] 
		}
		
	}
	
	let [tasks, setTasks] = useState<Array<TaskType>>(getLocalstorage(),
	//  [ { id: v1(), title: 'HTML', isDone: false, isEditing: false, } ]
	//  [ { id: v1(), title: 'CSS', isDone: false, isEditing: false, } ]
	//  [ { id: v1(), title: 'Javascript', isDone: false, isEditing: false, } ]
	//  [ { id: v1(), title: 'Redux', isDone: false, isEditing: false, } ]
	);
	const [filter, setFilter] = useState("all");
	const [value, setValue] = useState<string>("");
	const [error, setError] = useState<boolean | null>(null);

	useEffect(() => {
		if(tasks.length !== 0) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		} else {
			localStorage.setItem('tasks', JSON.stringify([]));
		}
		setTasks(tasks);
	}, [tasks]);

	


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
        if(window.confirm('Are you sure?')) {
            setTasks(filteredTask);
        }
	};

	const changeStatus = (taskId: string, isDone: boolean) => {
		const task = tasks.find((t) => t.id === taskId);
            if (task) {
                task.isDone = !task.isDone;
            }
		setTasks([...tasks]);
	};


	const editTodo = (id: string, title: string) => {
		const editingTask = tasks.map((task) => ({
            ...task,
            title: task.id === id ? title : task.title
            })
	    );
		setTasks([...editingTask]);
    };

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

        let filteredTasks = tasks;
        if(filter === 'active') {
            filteredTasks = tasks.filter(t => t.isDone === false);
		} else if (filter === 'completed') {
		    filteredTasks = tasks.filter(t => t.isDone === true);
		}

		function changeFilter(value: FilterValuesType) {
			setFilter(value);
		}

  return (
    <div className={styled.wrapper}>
        
        <h1 className={styled.title}>{"My Todo List"}</h1>

        <section className={styled.todoInputSec}>
            <TodoInput
				id={v1()}
				value={value}
				inputHandler={inputHandler}
				onKeyPressHandler={onKeyPressHandler}
				error={error}
				addTaskHandler={addTaskHandler}
				/>
        </section>

		<section className={styled.todosSec}>
			<div className={styled.todos}>
				{filteredTasks.map((taska) => {

					const onChangeHandler = (
						e: ChangeEvent<HTMLInputElement>
					) => {
						changeStatus(taska.id, e.currentTarget.checked);                    
					};


					return (
						<ListOfTodos 
							key={taska.id}
							title={taska.title}
							id={taska.id}
							isDone={taska.isDone}
							removeTask={() => removeTask(taska.id)} 
							onChange={onChangeHandler}
							editTodo={editTodo}
							onChangeHandler={onChangeHandler}
							checked={taska.isDone}
							onKeyPressHandler={onKeyPressHandler}
							filter={filter}
						/>
					)
				})}
			</div>
		</section>
		
        <FilterButtons 
			filter={filter}
			filteredTasks={filteredTasks}
			changeFilter={changeFilter}
			 />
    </div>
  )
}

export default TodoApp;
