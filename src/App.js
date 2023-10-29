import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Content from "./components/Content";
import Control from "./components/Control";
import { useState } from "react";

function App() {
	const [list, setList] = useState([]);

	const onAdd = (item) => {
		const tempList = [...list, item];
		setList(tempList);
	};

	const onDelete = (index) => {
		// 方法一
		const newTodos = [...list]
		newTodos.splice(index, 1)
		setList(newTodos)

		// 方法二
		// const res = list.filter((item) => item.id === index)
		// setList(res);
	};

	const onEdit = (updateTodoItem, index) => {
		const updTodos = [...list]
		updTodos.splice(index, 1, updateTodoItem)
		setList(updTodos)
	}

	return (
		<div className="App">
			<Control 
				onAdd={onAdd} 
			/>
			<Content 
				todoList={list}
				onDelete={onDelete}
				onEdit={onEdit}
			/>
		</div>
	);
}

export default App;
